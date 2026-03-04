// Global state management using React Context
import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import zh from '../i18n/zh';
import en from '../i18n/en';
import ko from '../i18n/ko';

const STORAGE_KEY = 'ai-news-dashboard-data';

// Sample data for 2026-02
const SAMPLE_DATA = {
  "2026-02": {
    year: 2026,
    month: 2,
    items: [
      { id: crypto.randomUUID(), no: 1, title: "SaaS '대학살'", subtitle: "SAP -16%, Salesforce -30%, 시총 1조 달러 증발", impact: "소프트웨어 주가 하루 1조 달러↓", applicability: "SAP 재계약 협상력 우위", future: "AI 에이전트가 SaaS 대체", highlight: false },
      { id: crypto.randomUUID(), no: 2, title: "AI 에이전트 1개 = 직원 10~15명 예상", subtitle: "Fortune 50. Salesforce 라이선스 60% 삭감", impact: "좌석 기반 SaaS 모델 붕괴", applicability: "MD·CS·구매 업무 에이전트화", future: "인당생산성 2~3배 향상", highlight: false },
      { id: crypto.randomUUID(), no: 3, title: "DeepSeek V3.2", subtitle: "GPT-5 동급 성능. 가격 1/140 ($0.04 vs $6.00)", impact: "AI 비용 94% 절감 현실화", applicability: "AI API 비용 대폭 절감 가능", future: "AI 활용비용 사실상 무료", highlight: false },
      { id: crypto.randomUUID(), no: 4, title: "AI 에이전트 거래액 $263B 예측", subtitle: "소비자 33% 'AI에게 구매 위임'", impact: "AI 쇼핑 트래픽 전년비 +1,200%", applicability: "패션·리테일 AEO 전환 시급", future: "브랜드 충성도→AI 추천 기반", highlight: false },
      { id: crypto.randomUUID(), no: 5, title: "패션 AI", subtitle: "SKU 수요예측 자동화. 리드타임 40% 단축 실현", impact: "샘플 제작비 30~50% 절감", applicability: "MD 수요예측+자동 발주", future: "재고일수 단축, 정판율 향상", highlight: false },
      { id: crypto.randomUUID(), no: 6, title: "NRF 2026", subtitle: "리테일 68%, 12~24개월 내 Agentic AI 배포 계획", impact: "경쟁사 68% 이미 착수", applicability: "마트·리테일 파일럿 즉시 착수", future: "AI 개인화로 매출 최대 +40%", highlight: false },
      { id: crypto.randomUUID(), no: 7, title: "호텔·외식 로봇 본격 침투", subtitle: "로봇 月 리스 $1,500 vs 인건비 절감 $3,000~4,000", impact: "2030년 시장 $12B (CAGR 25%)", applicability: "호텔·외식 파일럿 즉시 가능", future: "하우스키핑 인력 40~60% 절감", highlight: false },
      { id: crypto.randomUUID(), no: 8, title: "OpenClaw(구 Moltbot) 폭발", subtitle: "GitHub 21.5만 스타. 1주에 200만 명 방문", impact: "月 $4로 24시간 AI 비서", applicability: "1단계 바이브코딩 2단계 뭄트봇 도입", future: "에이전트가 모든 반복업무", highlight: true },
      { id: crypto.randomUUID(), no: 9, title: "OpenAI, DeepSeek IP 절취 美 의회 제기", subtitle: "Alibaba·Baidu 미 국방부 군사기업 등재", impact: "AI 미중 기술전쟁 법적 국면 확대", applicability: "데이터 보안정책 이사회 승인 필요", future: "민감 데이터: 미국산 모델 필수", highlight: false },
      { id: crypto.randomUUID(), no: 10, title: "바이브코딩 폭발", subtitle: "Lovable ARR $1M→$200M (1년, 200배 성장)", impact: "비개발자도 앱 제작", applicability: "이노플 전직원 AI 바이브코딩 실습", future: "IT 개발 생산성 5배 (28년 비용 0 수렴)", highlight: true }
    ]
  }
};

const translations = { zh, en, ko };

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [data, setData] = useLocalStorage(STORAGE_KEY, SAMPLE_DATA);
  const [language, setLanguage] = useState('ko');
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(2);

  const t = translations[language];

  const currentKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

  const currentItems = data[currentKey]?.items || [];

  const archivedMonths = Object.keys(data).sort((a, b) => b.localeCompare(a));

  const saveItem = (item) => {
    setData(prev => {
      const monthData = prev[currentKey] || { year: currentYear, month: currentMonth, items: [] };
      const existingIndex = monthData.items.findIndex(i => i.id === item.id);
      let newItems;
      if (existingIndex >= 0) {
        newItems = monthData.items.map(i => i.id === item.id ? item : i);
      } else {
        newItems = [...monthData.items, { ...item, id: crypto.randomUUID() }];
      }
      return {
        ...prev,
        [currentKey]: { ...monthData, items: newItems }
      };
    });
  };

  const deleteItem = (id) => {
    setData(prev => {
      const monthData = prev[currentKey];
      if (!monthData) return prev;
      return {
        ...prev,
        [currentKey]: {
          ...monthData,
          items: monthData.items.filter(i => i.id !== id)
        }
      };
    });
  };

  const toggleHighlight = (id) => {
    setData(prev => {
      const monthData = prev[currentKey];
      if (!monthData) return prev;
      return {
        ...prev,
        [currentKey]: {
          ...monthData,
          items: monthData.items.map(i => i.id === id ? { ...i, highlight: !i.highlight } : i)
        }
      };
    });
  };

  const selectMonth = (key) => {
    const [year, month] = key.split('-').map(Number);
    setCurrentYear(year);
    setCurrentMonth(month);
  };

  return (
    <AppContext.Provider value={{
      t,
      language,
      setLanguage,
      currentYear,
      setCurrentYear,
      currentMonth,
      setCurrentMonth,
      currentKey,
      currentItems,
      archivedMonths,
      data,
      saveItem,
      deleteItem,
      toggleHighlight,
      selectMonth
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
