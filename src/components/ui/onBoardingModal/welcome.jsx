import React from 'react'
import CustomCard from './customcard'
import { Card } from '../card'
import { Info } from 'lucide-react';
import LiteYouTubeEmbed from "./youtubevideo";
const WelcomeOnboarding = ({ setStep, closeModal }) => {
    const handlenext = () => {
        closeModal()
    }
    return (
        <CustomCard
            Title={"Great! You’re all set up!"}
            Subtitle={"We’ve customized your account with your selections and defaults you can customize later."}
            buttontext={"Next ->"}
            onContinue={handlenext}

        >
            <div className='player-wrapper '>
                <LiteYouTubeEmbed
                videoId={"mswxa241Xcs"}
                title="Demo Video"
                />
            </div>

            <Card className="p-8 gap-x-2 border-2 mt-8">
                <div className='flex flex-row gap-2'>
                    <Info color='#11B424' />
                    <h1>
                        <strong>Important note</strong></h1>
                </div>

                <p>Because you chose not to turn on your notetaker, we won’t be taking notes on your remote meetings yet. You can adjust that setting here.</p>
            </Card>
        </CustomCard>
    )
}

export default WelcomeOnboarding