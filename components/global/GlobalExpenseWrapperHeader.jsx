import React from "react";
import {
  GlobalHeaderTitle,
  GlobalHeaderWrapper,
  GlobalHeaderExpandText,
} from "../styled/global/globalexpensewrapperheader";

import Image from "next/image";
import Link from "next/link";

const GlobalExpenseWrapperHeader = ({ children }) => {
  return (
    <>
      <GlobalHeaderWrapper>
        <GlobalHeaderTitle>{children}</GlobalHeaderTitle>
        <Link href="#">
          <a>
            <GlobalHeaderExpandText>View All</GlobalHeaderExpandText>
            <Image
              src="/expensearrow.png"
              alt="arrow"
              width="6px"
              height="10px"
            ></Image>
          </a>
        </Link>
      </GlobalHeaderWrapper>
    </>
  );
};

export default GlobalExpenseWrapperHeader;
