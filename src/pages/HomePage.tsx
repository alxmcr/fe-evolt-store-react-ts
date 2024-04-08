import AppHeader from '../components/common/header/AppHeader';
import SectionComputers from '../components/sections/SectionComputers';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-perano-200 p-4">
      <AppHeader />
      <SectionComputers />
    </div>
  );
}
