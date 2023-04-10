import { useState } from 'react';
import TabButton from '@/components/tab/TabButton';
import TrackingForm from '@/components/forms/TrackingForm';
import ScheduleForm from '@/components/forms/ScheduleForm';
import Button from '@/components/ui/button';

const TabsPane = () => {
    const [tab, setTab] = useState('tracking');

    return (
        <div>
            <div className="mb-8 [&>button]:mr-8 last:[&>button]:mr-0">
                <TabButton isActive={tab === 'tracking'} onClick={() => setTab('tracking')}>
                    Tracking
                </TabButton>
                <TabButton isActive={tab === 'schedule'} onClick={() => setTab('schedule')}>
                    Schedule
                </TabButton>
                <TabButton isActive={tab === 'price'} onClick={() => setTab('price')}>
                    Price
                </TabButton>
            </div>
            <div>
                {tab === 'tracking' && <TrackingForm />}
                {tab === 'schedule' && <ScheduleForm />}
                {tab === 'price' && (
                    <div>
                        <p className="font-regular text-[15px] leading-[130%] text-black-dark mb-8">
                            Need a price for your transportation ? Access our instant quotation module and discover
                            SpotOn on pilot trades
                        </p>
                        <Button>Shipment tracking</Button>
                        <p className="font-light text-[13px] leading-[130%] text-black-dark text-opacity-70 mt-8">Prices module is accessible for registered customer.s</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabsPane;
