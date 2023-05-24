import "./Home.css";
import bgTop1Desktop from "../images/bg-section-top-desktop-1.svg";
import bgBottom1Desktop from "../images/bg-section-bottom-desktop-1.svg";
import bgTop2Desktop from "../images/bg-section-top-desktop-2.svg";
import bgBottom2Desktop from "../images/bg-section-bottom-desktop-2.svg";
import illustrationGrowTogether from "../images/illustration-grow-together.svg";
import illustrationYourUsers from "../images/illustration-your-users.svg";
import illustrationFlowingConversation from "../images/illustration-flowing-conversation.svg";
import bgTop1Mobile from "../images/bg-section-top-mobile-1.svg";
import bgBottom1Mobile from "../images/bg-section-bottom-mobile-1.svg";
import bgTop2Mobile from "../images/bg-section-top-mobile-2.svg";
import bgBottom2Mobile from "../images/bg-section-bottom-mobile-2.svg";
import mockups from "../images/screen-mockups.svg";
import iconCommunities from "../images/icon-communities.svg";
import iconMessages from "../images/icon-messages.svg";
import ImageChange from "../functions/ImageChange";

export default function Home() {
    const sectionIllustration = (
        topBg,
        bottomBg,
        title,
        paragraph,
        illustration
    ) => {
        return (
            <div className="grow-together-container">
                <img src={topBg} />
                <div className="grow-together-content">
                    <div className="grow-together-left">
                        <div className="word">
                            <h1 style={{ textAlign: "left", color: "hsl(192, 100%, 9%)" }}>
                                {title}
                            </h1>
                            <p>{paragraph}</p>
                        </div>
                    </div>
                    <div className="grow-together-right">
                        <img src={illustration} />
                    </div>
                </div>
                <img src={bottomBg} />
            </div>
        );
    };

    const ChangeImage = (largeImage, smallImage) => {
        return ImageChange() > 780 ? largeImage : smallImage;
    };

    return (
        <div className="container">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but
                so does your audience. Create connections with your users as you engage
                in genuine discussion.
            </p>
            <button className="get-started-btn">Get Started For Free</button>
            <div className="image-cover">
                <img src={mockups} />
            </div>
            <div className="stats-container">
                <div className="stat-box">
                    <img src={iconCommunities} />
                    <div className="stat-number">1.4k+</div>
                    <div className="stat-type">Communities Formed</div>
                </div>
                <div className="stat-box">
                    <img src={iconMessages} />
                    <div className="stat-number">2.7m+</div>
                    <div className="stat-type">Messages Sent</div>
                </div>
            </div>
            {sectionIllustration(
                ChangeImage(bgTop1Desktop, bgTop1Mobile),
                ChangeImage(bgBottom1Desktop, bgBottom1Mobile),
                "Grow Together",
                "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
                illustrationGrowTogether
            )}
            <div className="flowing-conv-content">
                <div className="flowing-conv-left">
                    <img src={illustrationFlowingConversation} />
                </div>
                <div className="flowing-conv-right">
                    <div>
                        <h1 style={{ textAlign: "left", color: "hsl(192, 100%, 9%)" }}>
                            Flowing Conversations
                        </h1>
                        <p>
                            You wouldn't paginate a conversation in real life, so why do it
                            online? Our threads have just-in-time loading for a more natural
                            flow.
                        </p>
                    </div>
                </div>
            </div>
            {sectionIllustration(
                ChangeImage(bgTop2Desktop, bgTop2Mobile),
                ChangeImage(bgBottom2Desktop, bgBottom2Mobile),
                "Your Users",
                "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
                illustrationYourUsers
            )}
            <div className="rdy-to-build-section">
                <h1>Ready To Build Your Community?</h1>
                <button className="get-started-btn">Get Started For Free</button>
            </div>
        </div>
    );
}
