import { FC } from "react";

type Page = {
  component: FC;
  visible: boolean;
};

interface VisiblePage {
  [key: string]: Page;
}

export default VisiblePage;
