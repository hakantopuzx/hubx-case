import { Tab } from '../models/model';
import phoneDocImage from '../assets/images/doc-scanner-image.png';
import phoneSignImage from '../assets/images/sign-stamp-image.png';
import phoneScaningImage from '../assets/images/scaning-image.png';
import phoneAdvancedImage from '../assets/images/advanced-image.png';
import phoneExportImage from '../assets/images/export-share-image.png';
import phoneSignAnimImage1 from '../assets/images/sign-image.png';
import phoneSignAnimImage2 from '../assets/images/stamp-image.png';
import phoneSignAnimImageMobile1 from '../assets/images/sign-image-mobile.png';
import phoneSignAnimImageMobile2 from '../assets/images/stamp-image-mobile.png';
import phoneScanAnimImage1 from '../assets/images/scaning-page-image.png';
import phoneScanAnimImage2 from '../assets/images/scaning-page-image-2.png';
import phoneScanAnimImage3 from '../assets/images/scaning-page-image-3.png';
import phoneScanAnimImageMobile1 from '../assets/images/scaning-page-image-mobile.png';
import phoneScanAnimImageMobile2 from '../assets/images/scaning-page-image-mobile-2.png';
import phoneScanAnimImageMobile3 from '../assets/images/scaning-page-image-mobile-3.png';
import phoneAdvancedAnimImage1 from '../assets/images/advanced-left-image.png';
import phoneAdvancedAnimImage2 from '../assets/images/advanced-right-image.png';
import phoneAdvancedAnimImageMobile1 from '../assets/images/advanced-left-image-mobile.png';
import phoneAdvancedAnimImageMobile2 from '../assets/images/advanced-right-image-mobile.png';
import phoneExportAnimImage1 from '../assets/images/export-arrow-image.png';
import phoneExportAnimImage2 from '../assets/images/export-pdf-image.png';
import phoneExportAnimImage3 from '../assets/images/export-jpg-image.png';
import phoneExportAnimImage4 from '../assets/images/export-txt-image.png';
import phoneExportAnimImageMobile1 from '../assets/images/export-arrow-image-mobile.png';
import phoneExportAnimImageMobile2 from '../assets/images/export-pdf-image-mobile.png';
import phoneExportAnimImageMobile3 from '../assets/images/export-jpg-image-mobile.png';
import phoneExportAnimImageMobile4 from '../assets/images/export-txt-image-mobile.png';
import tabmenuImage1 from '../assets/images/tab-doc-icon.svg';
import tabmenuImage2 from '../assets/images/tab-sign-ico.png';
import tabmenuImage3 from '../assets/images/tab-scan-ico.png';
import tabmenuImage4 from '../assets/images/tab-advanced-ico.png';
import tabmenuImage5 from '../assets/images/tab-export-ico.png';

export const tabs: Tab[] = [
  {
    id: 1,
    image: phoneDocImage,
    subTitle: 'Document Scanner',
    title: 'Scan with Ease',
    text: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    buttonText: 'Learn More',
    menuIcon: tabmenuImage1,
  },
  {
    id: 2,
    image: phoneSignImage,
    subTitle: 'Sign & Stamp',
    title: 'One-Tap Focus',
    text: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    buttonText: 'Learn More',
    animImage1: phoneSignAnimImage1,
    animImage2: phoneSignAnimImage2,
    animImageMobile1: phoneSignAnimImageMobile1,
    animImageMobile2: phoneSignAnimImageMobile2,
    menuIcon: tabmenuImage2,
  },
  {
    id: 3,
    image: phoneScaningImage,
    subTitle: 'Batch Scanning',
    title: 'Multiple Page Scan',
    text: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    buttonText: 'Learn More',
    animImage1: phoneScanAnimImage1,
    animImage2: phoneScanAnimImage2,
    animImage3: phoneScanAnimImage3,
    animImageMobile1: phoneScanAnimImageMobile1,
    animImageMobile2: phoneScanAnimImageMobile2,
    animImageMobile3: phoneScanAnimImageMobile3,
    menuIcon: tabmenuImage3,
  },
  {
    id: 4,
    image: phoneAdvancedImage,
    subTitle: 'Advanced filters',
    title: 'Unique Filters',
    text: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    buttonText: 'Learn More',
    animImage1: phoneAdvancedAnimImage1,
    animImage2: phoneAdvancedAnimImage2,
    animImageMobile1: phoneAdvancedAnimImageMobile1,
    animImageMobile2: phoneAdvancedAnimImageMobile2,
    menuIcon: tabmenuImage4,
  },
  {
    id: 5,
    image: phoneExportImage,
    subTitle: 'export & share',
    title: 'All-Round Conversion',
    text: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
    buttonText: 'Learn More',
    animImage1: phoneExportAnimImage1,
    animImage2: phoneExportAnimImage2,
    animImage3: phoneExportAnimImage3,
    animImage4: phoneExportAnimImage4,
    animImageMobile1: phoneExportAnimImageMobile1,
    animImageMobile2: phoneExportAnimImageMobile2,
    animImageMobile3: phoneExportAnimImageMobile3,
    animImageMobile4: phoneExportAnimImageMobile4,
    menuIcon: tabmenuImage5,
  },
];
