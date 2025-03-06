import styles from "./KnowMore.module.scss";

const KnowMore = () => {
  return (
    <section className={`${styles.know__more} container`}>
      <h2 className={styles.title}>
        Work Smart, Win Big: Pro Tips from <span>Swapnil Sharma</span>, CTO of
        Ovadrive (A Startupathon Success)
      </h2>
      <div className={styles.video__wrapper}>
        <iframe
          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fpn_HoowYNTQ%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dpn_HoowYNTQ&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fpn_HoowYNTQ%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
          width={940}
          height={528}
          title="Maximize Your Webapp's Potential with V0 by Vercel and Claude"
        ></iframe>
      </div>
      <h2 className={styles.title}>
        Our Hiring Process: Shared Through Candidate Stories
      </h2>
      <div className={styles.video__wrapper}>
        <iframe
          src="https://cdn.loom.com/sessions/thumbnails/0847b9257f144fd0830a8536dfbc8e81-3fb333027ee2e702.mp4"
          width={940}
          height={528}
          title="Building Billion-Dollar Companies: Startup-A-Thon Insights"
        ></iframe>
      </div>
    </section>
  );
};

export default KnowMore;
