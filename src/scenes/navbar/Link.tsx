import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled: (value: boolean) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
      transition duration-500 hover:text-primary-300
      `}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false)
      }}
    >
      {page}
    </AnchorLink>
  )
}

export default Link