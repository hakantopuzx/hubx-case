import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Tab } from '../models/model';

const TabContainer = styled.div`
  background: white;
  z-index: 100;
`;

const TabList = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

interface TabItemProps {
  $active: boolean;
}

const TabItemWrapper = styled.div<TabItemProps>`
  position: relative;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: none;
  background: ${(props) => (props.$active ? '#0381FF08' : '#FFFFFF')};
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  min-width: 80px;
  border: 2px solid transparent;
  border-right: 2px solid #00000014;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 2px solid ${(props) => (props.$active ? 'transparent' : '#0381FF')} !important;
    &:last-child {
      border-right: 2px solid #0381ff;
    }
  }
  &:last-child {
    border-right: 2px solid transparent;
  }

  @media (max-width: 768px) {
    min-width: 70vw;
  }
`;

const TabItem = styled.button<TabItemProps>`
  width: 100%;
  padding: 35px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  min-width: 80px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CircleBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
  border-radius: 50%;
  background: #fff;
`;

const ActiveBorderSVG = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  transform: rotate(-90deg);
`;

const TabIcon = styled.img<TabItemProps>`
  width: 32px;
  height: 32px;
  filter: ${(props) =>
    props.$active
      ? 'invert(41%) sepia(98%) saturate(2247%) hue-rotate(199deg) brightness(102%) contrast(102%)'
      : 'invert(62%) sepia(0%) saturate(0%) hue-rotate(251deg) brightness(95%) contrast(89%)'};
  transition: filter 0.2s;
`;

const TabText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

interface TabMenuProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab) => (
          <TabItemWrapper $active={activeTab === tab.id} key={tab.id}>
            <TabItem
              $active={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
            >
              <IconWrapper>
                <CircleBorder />
                {activeTab === tab.id && (
                  <ActiveBorderSVG viewBox="0 0 48 48">
                    <motion.circle
                      cx="24"
                      cy="24"
                      r="23.5"
                      fill="none"
                      stroke="#0381FF"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                      }}
                    />
                  </ActiveBorderSVG>
                )}
                <TabIcon
                  src={tab.menuIcon}
                  alt={tab.subTitle}
                  $active={activeTab === tab.id}
                />
              </IconWrapper>
              <TabText>{tab.subTitle}</TabText>
            </TabItem>
          </TabItemWrapper>
        ))}
      </TabList>
    </TabContainer>
  );
};

export default TabMenu;
