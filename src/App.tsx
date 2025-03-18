import { useEffect, useState } from 'react';
import styles from './App.module.css';
import styled from 'styled-components';
import { tabs } from './data/tabs';
import TabContent from './components/TabContent';
import TabMenu from './components/TabMenu';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f9fa;
`;
export function App() {
  const [activeTab, setActiveTab] = useState(1);
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  return (
    <>
      <main className={styles.main}>
        <AppContainer>
          <TabContent tab={currentTab} />
          <TabMenu
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </AppContainer>
      </main>
    </>
  );
}
