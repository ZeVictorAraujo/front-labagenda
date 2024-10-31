import SideBar from '../../components/SideBar/SideBar';
import Banner from '../../components/Banner/Banner';

export default function Home() {
    return (
        <div className="flex h-screen">
            <SideBar />
            <div className="ml-64 flex-1 overflow-auto">
                <Banner />
            </div>
        </div>
    );
}
