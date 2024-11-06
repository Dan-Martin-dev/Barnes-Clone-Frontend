/* import { useTranslation } from "react-i18next"; */
import type { FunctionComponent } from "../common/types";
import HomeMain from "../components/layout/HomeMain";
import HomeSecond from "../components/layout/HomeSecond";
import HomeThird from "../components/layout/HomeThird";

export const Home = (): FunctionComponent => {
/* 	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	}; */

	return (
		<div className="">
			<HomeMain/>
			<HomeSecond/>
			<HomeThird/>
		</div>
	);
};
