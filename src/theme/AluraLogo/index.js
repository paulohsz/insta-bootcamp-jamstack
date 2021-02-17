import React from 'react';
import { useTheme } from 'styled-components';

export default function AluraLogo() {
  const { svg } = useTheme().colors;

  return (
    <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3022 0H17.9227C18.0544 0 18.1647 0.099035 18.1647 0.217238V23.762C18.1642 23.8196 18.1386 23.8747 18.0934 23.9154C18.0481 23.9562 17.9869 23.9794 17.9227 23.98H15.3022C15.2381 23.9794 15.1769 23.9562 15.1316 23.9154C15.0864 23.8747 15.0608 23.8196 15.0603 23.762V0.217238C15.0603 0.099035 15.1697 0 15.3022 0ZM33.3122 19.3733V19.9667C33.3122 20.2239 33.2686 20.5793 33.1583 21.0345C33.0702 21.469 32.806 21.9235 32.388 22.3587C31.9699 22.794 31.3535 23.1894 30.5164 23.5056C29.6803 23.8219 28.5346 23.98 27.0598 23.98C25.5841 23.98 24.4393 23.8219 23.6032 23.5056C22.767 23.1894 22.1497 22.8132 21.7316 22.3587C21.3136 21.9235 21.0485 21.469 20.9604 21.0146C20.8724 20.5593 20.8065 20.2239 20.8065 19.9667V6.56346C20.8065 6.44446 20.9168 6.34622 21.0485 6.34622H23.669C23.8006 6.34622 23.9109 6.44446 23.9109 6.56346V19.1169C23.9109 19.5322 23.9768 19.8278 24.0435 20.0658C24.1093 20.303 24.2409 20.5402 24.4393 20.7374C24.6377 20.9555 24.9463 21.1328 25.3644 21.2717C25.7602 21.4099 26.3108 21.489 26.994 21.489C27.6985 21.489 28.2704 21.4091 28.6885 21.2717C29.1066 21.1328 29.4152 20.9555 29.6358 20.7574C29.8555 20.5601 30.0094 20.3421 30.0761 20.1049C30.142 19.8677 30.23 19.6704 30.23 19.097V6.56346C30.23 6.44446 30.3403 6.34622 30.472 6.34622H33.0925C33.2241 6.34622 33.3344 6.44446 33.3344 6.56346V19.3741H33.3122V19.3733ZM42.2295 6.34622H43.9907C44.1455 6.34622 44.2549 6.48439 44.2113 6.62256L43.6171 8.67834C43.5949 8.77737 43.4846 8.83647 43.3965 8.83647H42.1637C41.5028 8.83647 40.9744 8.91634 40.5563 9.07368C40.1605 9.23181 39.8296 9.40992 39.6099 9.62716C39.4144 9.81148 39.271 10.0353 39.1918 10.2797C39.1251 10.5169 39.1029 10.7349 39.1029 10.9322V23.782C39.1024 23.8395 39.0768 23.8946 39.0316 23.9354C38.9863 23.9762 38.925 23.9994 38.8609 24H36.2191C36.155 23.9994 36.0937 23.9762 36.0485 23.9354C36.0032 23.8946 35.9776 23.8395 35.9771 23.782V10.3787C35.9771 10.1415 36.0207 9.78529 36.131 9.33085C36.2191 8.87561 36.4833 8.44113 36.9013 7.98669C37.3194 7.55141 37.9367 7.15607 38.7729 6.8398C39.5877 6.50436 40.7547 6.34622 42.2295 6.34622ZM6.23102 6.34622C8.36585 6.34622 9.92961 6.7216 10.9428 7.47235C11.9337 8.22389 12.4398 9.17351 12.4398 10.2996V19.9867C12.4398 20.382 12.3517 20.8173 12.1979 21.2717C12.044 21.7462 11.7353 22.1806 11.2728 22.5568C10.8102 22.9521 10.1724 23.2676 9.37989 23.5448C8.58644 23.8019 7.52971 23.9401 6.25326 23.9401C4.95457 23.9401 3.91918 23.8019 3.12663 23.5448C2.33408 23.2876 1.69452 22.9521 1.23286 22.5568C0.770316 22.1615 0.462545 21.7262 0.307771 21.2709C0.153885 20.7973 0.0658238 20.3621 0.0658238 19.9867V18.4453C0.0658238 17.6146 0.30866 16.8631 0.770316 16.1906C1.2551 15.5189 1.91512 15.0246 2.79662 14.7474C3.23693 14.6093 3.72171 14.4711 4.29367 14.293C4.84427 14.1149 5.39399 13.9575 5.92236 13.7786C6.45073 13.6205 6.89193 13.4624 7.28776 13.3442C7.68448 13.206 7.92643 13.1461 8.01449 13.107C8.10255 13.067 8.2342 13.0079 8.38808 12.9289C8.54286 12.8498 8.69674 12.7316 8.85063 12.5934C9.0054 12.4345 9.1157 12.2572 9.22511 12.0791C9.33541 11.881 9.37989 11.6438 9.37989 11.3866V10.774C9.37989 10.5568 9.33541 10.3396 9.22511 10.1024C9.13705 9.86436 8.96093 9.66709 8.71898 9.46902C8.47703 9.27175 8.14614 9.11361 7.74941 8.99461C7.35358 8.87641 6.84745 8.8173 6.23102 8.8173C5.0204 8.8173 4.20561 9.03454 3.7653 9.48899C3.38548 9.88829 3.16123 10.388 3.12663 10.9122C3.12663 11.0312 3.01633 11.1103 2.88468 11.1103H0.242836C0.178729 11.1099 0.117365 11.0869 0.0719494 11.0462C0.0265341 11.0056 0.000697707 10.9506 0 10.893L0 10.3196C0 9.76612 0.110299 9.25178 0.352246 8.77817C0.572845 8.30296 0.946439 7.86769 1.47481 7.51228C1.98183 7.15607 2.6205 6.85977 3.41305 6.6625C4.18337 6.46443 5.12981 6.34622 6.23102 6.34622ZM9.35765 15.0246C9.33747 15.126 9.29368 15.2224 9.22915 15.3076C9.16462 15.3928 9.0808 15.4648 8.98317 15.5189C8.78481 15.6371 8.60957 15.6962 8.43256 15.7561C8.05896 15.8743 7.66224 15.9933 7.24417 16.1315C6.8261 16.2697 6.42938 16.4087 6.0549 16.5069C5.61459 16.6459 5.19652 16.7641 4.82204 16.9022C4.52206 17.02 4.24088 17.1731 3.9859 17.3575C3.7653 17.5348 3.56694 17.7528 3.38992 18.0292C3.21469 18.3063 3.12663 18.6425 3.12663 19.057C3.12663 19.8877 3.34634 20.5002 3.78665 20.9155C4.22695 21.3109 5.04175 21.5281 6.23102 21.5281C7.44164 21.5281 8.27867 21.3109 8.71898 20.8956C9.15929 20.4611 9.37989 19.8677 9.37989 19.077V15.0246H9.35765ZM51.6094 6.34622C53.7442 6.34622 55.308 6.7216 56.3211 7.47235C57.312 8.22389 57.8182 9.17351 57.8182 10.2996V19.9867C57.8182 20.382 57.7301 20.8173 57.5762 21.2717C57.4215 21.7462 57.1137 22.1806 56.6511 22.5568C56.1886 22.9521 55.5499 23.2676 54.7574 23.5448C53.9657 23.8019 52.9081 23.9401 51.6316 23.9401C50.3329 23.9401 49.2976 23.8019 48.505 23.5448C47.7125 23.2876 47.0729 22.9521 46.6112 22.5568C46.1487 22.1615 45.8409 21.7262 45.6861 21.2709C45.5323 20.7973 45.4442 20.3621 45.4442 19.9867V18.4453C45.4442 17.6146 45.6861 16.8631 46.1487 16.1906C46.6335 15.5189 47.2935 15.0246 48.1741 14.7474C48.6144 14.6093 49.0992 14.4711 49.672 14.293C50.2218 14.1149 50.7724 13.9575 51.3007 13.7786C51.8291 13.6205 52.2703 13.4624 52.6661 13.3442C53.062 13.206 53.3048 13.1461 53.3929 13.107C53.4809 13.067 53.6126 13.0079 53.7665 12.9289C53.9212 12.8498 54.0751 12.7316 54.229 12.5934C54.3838 12.4345 54.4932 12.2572 54.6035 12.0791C54.7138 11.881 54.7574 11.6438 54.7574 11.3866V10.774C54.7574 10.5568 54.7129 10.3396 54.6035 10.1024C54.5154 9.86436 54.3393 9.66709 54.0965 9.46902C53.8554 9.27175 53.5245 9.11361 53.1287 8.99461C52.732 8.87641 52.2258 8.8173 51.6094 8.8173C50.3979 8.8173 49.584 9.03454 49.1437 9.48899C48.7639 9.88829 48.5396 10.388 48.505 10.9122C48.505 11.0312 48.3947 11.1103 48.2622 11.1103H45.6203C45.5564 11.1097 45.4952 11.0866 45.45 11.046C45.4048 11.0054 45.3791 10.9505 45.3784 10.893V10.3196C45.3784 9.76612 45.4887 9.25178 45.7306 8.77817C45.9503 8.30296 46.3248 7.86769 46.8532 7.51228C47.3602 7.15607 47.998 6.85977 48.7905 6.6625C49.584 6.46443 50.5082 6.34622 51.6094 6.34622ZM54.736 15.0246C54.7158 15.126 54.6721 15.2224 54.6075 15.3076C54.543 15.3928 54.4592 15.4648 54.3615 15.5189C54.1632 15.6371 53.9879 15.6962 53.8109 15.7561C53.4373 15.8743 53.0406 15.9933 52.6217 16.1315C52.2036 16.2697 51.8078 16.4087 51.4333 16.5069C50.993 16.6459 50.574 16.7641 50.2004 16.9022C49.9001 17.0199 49.6186 17.173 49.3634 17.3575C49.1437 17.5348 48.9453 17.7528 48.7692 18.0292C48.5931 18.3063 48.505 18.6425 48.505 19.057C48.505 19.8877 48.7247 20.5002 49.165 20.9155C49.6053 21.3109 50.4201 21.5281 51.6094 21.5281C52.82 21.5281 53.6571 21.3109 54.0974 20.8956C54.5377 20.4611 54.7574 19.8677 54.7574 19.077V15.0246H54.736Z" fill={svg.color} />
    </svg>

  );
}