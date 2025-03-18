import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Tab } from '../models/model';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fbfcfc;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const ContentSection = styled(motion.div)`
  max-width: 520px;
  width: 100%;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    padding-top: 32px;
  }
`;

const SubTitle = styled.h3`
  font-weight: 800;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2px;
  text-align: right;
  text-transform: uppercase;
  color: #0381ff;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: right;
  color: #0b122a;
  margin: 16px 0 20px 0;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 24px;
    margin: 16px 0;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.8px;
  text-align: right;
  color: #0b172a;
  margin: 0;

  @media (max-width: 768px) {
    font-family: SF Pro Display;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    padding: 0 24px;
    height: 56px;
    overflow: hidden;
  }
`;

const LearnMoreButton = styled.button`
  background-color: transparent;
  border: 0.5px solid #00000029;
  padding: 15px 20px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-weight: 400;
    font-size: 14.81px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    padding: 10px 14px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 375px;
  min-height: 560px;
  @media (max-width: 768px) {
    max-width: 230px;
    min-height: 300px;
  }
`;

const PhoneImage = styled(motion.img)`
  width: 100%;
  min-height: 560px;
  height: 100%;
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const PhoneAnimImage = styled(motion.img)`
  width: auto;
  height: auto;
  position: absolute;
`;

interface TabContentProps {
  tab: Tab;
}

export const size = {
  isMobile: (): boolean => window.innerWidth > 768,
};

const TabContent: React.FC<TabContentProps> = ({ tab }) => {
  const [isMobile, setIsMobile] = useState(size.isMobile());

  useEffect(() => {
    const handleResize = () => setIsMobile(size.isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animSettings =
    {
      2: {
        animProps1: {
          initial: {
            opacity: 0,
            x: isMobile ? -200 : -100,
            y: isMobile ? 80 : 50,
          },
          animate: {
            opacity: 1,
            x: isMobile ? -200 : -100,
            y: isMobile ? 80 : 50,
          },
          transition: { duration: 0.8, delay: 1, ease: 'easeInOut' },
        },
        animProps2: {
          initial: {
            opacity: 0,
            y: isMobile ? -10 : -20,
            x: isMobile ? 180 : 100,
          },
          animate: {
            opacity: 1,
            y: isMobile ? -10 : -20,
            x: isMobile ? 180 : 100,
          },
          transition: { duration: 0.8, delay: 1.3, ease: 'easeInOut' },
        },
      },
      3: {
        animProps1: {
          initial: { opacity: 1, y: 600, x: 0 },
          animate: { opacity: 1, y: 40, x: 0 },
          transition: { duration: 0.8, delay: 1, ease: 'easeInOut' },
        },
        animProps2: {
          initial: { opacity: 1, y: 600, x: 0 },
          animate: { opacity: 1, y: 50, x: 0 },
          transition: { duration: 0.8, delay: 1.3, ease: 'easeInOut' },
        },
        animProps3: {
          initial: { opacity: 1, y: 600, x: 0 },
          animate: { opacity: 1, y: 60, x: 0 },
          transition: { duration: 0.8, delay: 1.5, ease: 'easeInOut' },
        },
      },
      4: {
        animProps1: {
          initial: {
            opacity: 0,
            x: isMobile ? -200 : -120,
            y: isMobile ? 50 : 25,
          },
          animate: {
            opacity: 1,
            x: isMobile ? -200 : -120,
            y: isMobile ? 50 : 25,
          },
          transition: { duration: 0.8, delay: 1, ease: 'easeInOut' },
        },
        animProps2: {
          initial: {
            opacity: 0,
            y: isMobile ? 50 : 25,
            x: isMobile ? 200 : 120,
          },
          animate: {
            opacity: 1,
            y: isMobile ? 50 : 25,
            x: isMobile ? 200 : 120,
          },
          transition: { duration: 0.8, delay: 1.2, ease: 'easeInOut' },
        },
      },
      5: {
        animProps1: {
          initial: { opacity: 1, x: isMobile ? -100 : -30, y: isMobile? 400 : 350 },
          animate: { opacity: 1, x:isMobile ? -210 : -130, y:isMobile ? 210 : 115 },
          transition: { duration: 0.8, delay: 1, ease: 'easeInOut' },
        },
        animProps2: {
          initial: { opacity: 1, x: isMobile ? -100 : -100, y: isMobile ? 400 : 350 },
          animate: { opacity: 1, x: isMobile ? -140 : -80, y: isMobile ? 150 : 80 },
          transition: { duration: 0.8, delay: 1.2, ease: 'easeInOut' },
        },
        animProps3: {
          initial: { opacity: 1, x: isMobile ? -100 : -100, y: isMobile ? 400 : 350 },
          animate: { opacity: 1, x: isMobile ? 0 : 0, y: isMobile ? 120 : 60 },
          transition: { duration: 0.8, delay: 1.4, ease: 'easeInOut' },
        },
        animProps4: {
          initial: { opacity: 1, x: isMobile ? 100 : -100, y: isMobile ? 400 : 350 },
          animate: { opacity: 1, x: isMobile ? 140 : 90, y: isMobile ? 150 : 80 },
          transition: { duration: 0.8, delay: 1.6, ease: 'easeInOut' },
        },
      },
    }[tab.id] || {};
  return (
    <Container key={tab.id}>
      {' '}
      <Content>
        <ImageSection>
          <PhoneImage
            src={tab.image}
            alt={tab.title}
            initial={{ y: 600 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
          {tab.animImage1 && (
            <PhoneAnimImage
              style={{ zIndex: 1 }}
              src={isMobile ? tab.animImage1 : tab.animImageMobile1}
              alt={tab.title}
              {...animSettings.animProps1}
            />
          )}
          {tab.animImage2 && (
            <PhoneAnimImage
              style={{ zIndex: 50 }}
              src={isMobile ? tab.animImage2 : tab.animImageMobile2}
              alt={tab.title}
              {...animSettings.animProps2}
            />
          )}
          {tab.animImage3 && (
            <PhoneAnimImage
              style={{ zIndex: 100 }}
              src={isMobile ? tab.animImage3 : tab.animImageMobile3}
              alt={tab.title}
              {...animSettings.animProps3}
            />
          )}
          {tab.animImage4 && (
            <PhoneAnimImage
              src={isMobile ? tab.animImage4 : tab.animImageMobile4}
              alt={tab.title}
              {...animSettings.animProps4}
            />
          )}
        </ImageSection>
        <ContentSection
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <SubTitle>{tab.subTitle}</SubTitle>
          <Title>{tab.title}</Title>
          <Description>{tab.text}</Description>
          <LearnMoreButton>{tab.buttonText}</LearnMoreButton>
        </ContentSection>
      </Content>
    </Container>
  );
};

export default TabContent;
