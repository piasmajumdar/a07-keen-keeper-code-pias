import React, { useContext } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms } from 'react-icons/md';
import { PiArchive, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { TimelineContext } from '../../context/TimelineContext';

const FriendDetails = () => {
    const friends = useLoaderData();
    const { friendId } = useParams();
    // console.log(friendId)

    const { handleCheckIn } = useContext(TimelineContext);

    const friend = friends.find(fd => fd.id == friendId);

    return (
        <div className='w-11/12 max-w-[1110px] mx-auto py-20'>
            <div className='flex flex-col items-center sm:items-start sm:flex-row gap-6 '>
                {/* Left side */}
                <div className='space-y-4 max-w-90'>
                    {/* profile */}
                    <div className="card bg-base-100 shadow-sm">
                        <figure className='pt-6'>
                            <img
                                className='w-20 h-20 rounded-full'
                                src={friend.picture}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-xl text-[#1F2937]">{friend.name}</h2>

                            <div className='flex justify-center gap-2 text-[12px] font-medium text-white'>
                                {
                                    friend.status === 'overdue' ?
                                        <div className='px-2 py-2 rounded-full bg-[#EF4444]'>Overdue</div>
                                        : friend.status === 'almost due' ?
                                            <div className='px-2 py-2 rounded-full bg-[#EFAD44]'>Almost Due</div>
                                            : <div className='px-2 py-2 rounded-full bg-[#244D3F]'>On-Track</div>
                                }
                            </div>

                            <div className='flex justify-center gap-2 text-[12px] font-medium text-[#244D3F]'>
                                {
                                    friend.tags.map((tag, ind) => <div key={ind} className='px-2 py-2 rounded-full bg-green-200'>{tag.toUpperCase()}</div>)
                                }
                            </div>

                            <p className='inter font-medium text-[#64748B] italic'>{friend.bio}</p>
                            <p className='text-[#64748B] text-[14px] '>{friend.email}</p>



                        </div>

                    </div>

                    {/* left buttons */}
                    <div className='flex flex-col gap-2'>
                        <button className='btn flex items-center bg-white font-medium text-[#1F2937]'><RiNotificationSnoozeLine /> <span>Snooze 2 weeks</span></button>
                        <button className='btn flex items-center bg-white font-medium text-[#1F2937]'><PiArchive /> <span>Archive</span></button>
                        <button className='btn flex items-center bg-white font-medium text-[#EF4444]'><RiDeleteBinLine /> <span>Delete</span></button>
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex-1 space-y-6'>
                    <div className='flex flex-wrap md:flex-nowrap gap-6'>
                        <div className="card bg-base-100 card-xs shadow-sm flex-1">
                            <div className="card-body text-center py-8 px-4">
                                <h2 className="font-semibold text-3xl text-[#244D3F]">{friend.days_since_contact}</h2>
                                <h2 className='text-[#64748B] text-lg'>Days Since Contact</h2>
                            </div>
                        </div>
                        <div className="card bg-base-100 card-xs shadow-sm flex-1">
                            <div className="card-body text-center py-8 px-4">
                                <h2 className="font-semibold text-3xl text-[#244D3F]">{friend.goal}</h2>
                                <h2 className='text-[#64748B] text-lg'>Goal (Days)</h2>
                            </div>
                        </div>
                        <div className="card bg-base-100 card-xs shadow-sm flex-1">
                            <div className="card-body text-center py-8 px-4">
                                <h2 className="font-semibold text-3xl text-[#244D3F]">{new Date(friend.next_due_date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}</h2>
                                <h2 className='text-[#64748B] text-lg'>Next Due</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card bg-base-100 card-xs shadow-sm flex-1">
                            <div className="card-body p-6">
                                <div className='flex justify-between items-center'>
                                    <h2 className="font-medium text-xl text-[#244D3F]">Relationship Goal</h2>
                                    <button className='btn text-[#1F2937] font-medium'>Edit</button>
                                </div>
                                <h2 className='text-[#64748B] text-lg'>Connect every <span className='text-[#1F2937] font-bold'>{friend.goal} days</span></h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 card-xs shadow-sm flex-1">
                            <div className="card-body p-6">
                                <h2 className="font-medium text-xl text-[#244D3F]">Quick Check-In</h2>
                                <div className='flex gap-4'>
                                    <button onClick={() => handleCheckIn(event, friend)} className='btn h-auto p-4 flex flex-col flex-1 justify-center items-center text-[#1F2937] text-lg'><BiPhoneCall className='text-2xl' /> <span>Call</span></button>
                                    <button onClick={() => handleCheckIn(event, friend)} className='btn h-auto p-4 flex flex-col flex-1 justify-center items-center text-[#1F2937] text-lg'><MdOutlineTextsms className='text-2xl' /> Text</button>
                                    <button onClick={() => handleCheckIn(event, friend)} className='btn h-auto p-4 flex flex-col flex-1 justify-center items-center text-[#1F2937] text-lg'><PiVideoCameraBold className='text-2xl' /> Video</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FriendDetails;