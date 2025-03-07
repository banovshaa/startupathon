import styles from "./Timeline.module.scss";
import PlayIcon from "@/assets/images/shared/icons/start.png";
import CheckedIcon from "@/assets/images/shared/icons/checked.png";
import SubmitIcon from "@/assets/images/shared/icons/submit.png";
import FeedbackIcon from "@/assets/images/shared/icons/feedback.png";
import Image from "next/image";
const Timeline = () => {
  const timeline = [
    {
      title: "Dive into the Challenge Details Video",
      icon: PlayIcon,
      subtitle: "It all starts here!",
      description:
        "Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
      bottomText:
        "<p>💡<span>Pro Tip</span> : Pay attention—it’s more than just instructions. It’s your roadmap to success!</p>",
    },
    {
      title: "Build, Submit & Shine",
      icon: SubmitIcon,
      description:
        "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.",
      bottomText:
        "<p>💡<span>Stay ahead</span> : Submit on time or early to show your dedication!</p>",
    },
    {
      title: "Get Feedback, Level Up!",
      icon: FeedbackIcon,
      description:
        "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.",
      bottomText:
        "<p>💡<span>Pro Tip</span> : This feedback is <span>gold</span>. Use it to sharpen your submission or learn what it takes to win!</p>",
    },
    {
      title: "Claim Your Crown",
      icon: CheckedIcon,
      subtitle: "Ace the challenge to become the project leader.",
      description:
        "Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent!",
    },
  ];
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__progress}>
        <div className={styles.progress__bar}></div>
      </div>
      {timeline.map((element, index) => {
        return (
          <div
            key={`timeline__${index}`}
            className={`${styles.timeline__item}`}
          >
            <div className={styles.left}>
              <p>{element.title}</p>
            </div>
            <div className={styles.center}>
              <div className={styles.icon}>
                <Image src={element.icon} alt="Icon" />
              </div>
            </div>
            <div className={styles.right}>
              <p className={styles.subtitle}>{element.subtitle}</p>
              <p className={styles.desc}>{element.description}</p>
              {element.bottomText && (
                <div
                  className={styles.bottom__text}
                  dangerouslySetInnerHTML={{ __html: element.bottomText }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
