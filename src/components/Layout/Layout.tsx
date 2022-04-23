import { MenuTop } from '../MenuTop/MenuTop';
import { Footer } from '../Footer/Footer';
interface IProps {
  children?: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
export const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <>
      <MenuTop />
      {children}
      <Footer />
    </>

  );

};