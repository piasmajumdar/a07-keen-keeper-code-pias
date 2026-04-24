import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { TimelineContext } from '../../context/TimelineContext';


const StatsPage = ({ isAnimationActive = true }) => {
    const { friendsTimeline } = useContext(TimelineContext);

    const callCount = friendsTimeline.filter(friend => friend.act == "Call").length;
    const textCount = friendsTimeline.filter(friend => friend.act == "Text").length;
    const videoCount = friendsTimeline.filter(friend => friend.act == "Video").length;

    const data = [
        { name: 'Call', value: callCount, fill: '#0a4735' },
        { name: 'Text', value: textCount, fill: '#1931bd' },
        { name: 'Video', value: videoCount, fill: '#14a379' },
    ]


    return (
        <div className='w-11/12 max-w-[1110px] mx-auto py-20'>
            <div className='space-y-6'>
                <h2 className='font-bold text-5xl text-[#1F2937]'>Friendship Analytics</h2>



                <div className='bg-white rounded-xl shadow-xl p-8'>
                    <h3 className='text-[#244D3F] font-medium text-xl'>By Interaction Type</h3>

                    {
                        friendsTimeline.length == '0' ?
                            (<div className='h-[30vh] flex items-center justify-center'>
                                <h2 className='text-3xl text-gray-600'>No interactions logged yet.</h2>
                            </div>)
                            : (<div className='flex justify-center items-center'>
                                <PieChart
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        maxHeight: '80vh',
                                        aspectRatio: 1,

                                    }}

                                >
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={isAnimationActive}
                                    />
                                    <div className='flex justify-center'>

                                        <Legend iconType='circle' width={'100%'} />
                                    </div>
                                    <RechartsDevtools />
                                    <Tooltip></Tooltip>
                                </PieChart>
                            </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default StatsPage;