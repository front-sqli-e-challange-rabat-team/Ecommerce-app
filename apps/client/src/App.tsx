import { TitleUi } from '@repo/ui';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>
      <div className='bg-red-300 text-center'>anas jaidi</div>
      <TitleUi />

      <div className="flex items-center justify-center">
        <AdminDashboard />
      </div>
    </>
  );
}

export default App;
