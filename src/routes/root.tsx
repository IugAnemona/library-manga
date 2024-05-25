import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';

export const Root: React.FC = () => {
  return (
    <>
      <TopBar />
      <div className="mt-24">
        <Outlet />
      </div>
    </>
  );
};
