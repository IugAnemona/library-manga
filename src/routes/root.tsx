import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';

export const Root: React.FC = () => {
  return (
    <>
      <TopBar />
      <div className="m-16">
        <Outlet />
      </div>
    </>
  );
};
