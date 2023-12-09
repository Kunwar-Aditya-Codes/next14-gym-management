import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
};
export default layout;
