import AnchorLink from "react-anchor-link-smooth-scroll"

interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page.toLowerCase().trim().replace(/ /g, "")

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
      transition duration-500 hover:text-primary-300
      `}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link