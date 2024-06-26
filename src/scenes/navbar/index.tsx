import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from "@/assets/Logo.png"
import Link from './Link'
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionBtn from '@/shared/ActionBtn';

interface Props {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage
}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div
          className={`${flexBetween} mx-auto w-5/6`}
        >
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (<div
              className={`${flexBetween} w-full`}
            >
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page='Benefits'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page='Our Classes'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
                <Link
                  page='Contact Us'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <ActionBtn setSelectedPage={setSelectedPage}
                >
                  Become a Member
                </ActionBtn>
              </div>
            </div>) : (<button
              type='button'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {<Bars3Icon className="size-10 rounded-full bg-secondary-500 p-2" />}
            </button>)}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          <div className='flex justify-end p-12'>
            <button type='button' onClick={() => setIsMenuToggled(!isMenuToggled)}>
              {<XMarkIcon className='h-6 w-6 text-gray-400' />}
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
          {/* <div className={`${flexBetween} gap-8`}>
            <p>Sing In</p>
            <ActionBtn setSelectedPage={SelectedPage}
            >
              Become a Member
            </ActionBtn>
          </div> */}
        </div>
      )}
    </nav>
  )
};

export default NavBar