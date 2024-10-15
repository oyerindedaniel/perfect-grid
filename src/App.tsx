import {
  IllustrationCreatePost,
  IllustrationAudienceGrowth,
  IllustrationMultiplePlatforms,
  IllustrationAIContent,
  IllustrationConsistentSchedule,
  IllustrationFiveStars,
  IllustrationGrowFollowers,
  IllustrationSchedulePosts,
} from './assets/images';

function App() {
  return (
    <div className='grid-layout'>
      <div className='grid-layout__create-post'>
        <h2>
          Create and schedule content <span>quicker.</span>
        </h2>
        <img src={IllustrationCreatePost} alt='create post' />
      </div>
      <div className='grid-layout__social-media'>
        <h2> Social Media 10x Faster with AI</h2>

        <div>
          <img src={IllustrationFiveStars} alt='five stars' />
          <p>Over 4,000 5-star reviews</p>
        </div>
      </div>
      <div className='grid-layout__schedule-post'>
        <h2> Schedule to social media.</h2>
        <img src={IllustrationSchedulePosts} alt='schedule posts' />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      <div className='grid-layout__write-content'>
        <h2>Write your content using AI.</h2>
        <img src={IllustrationAIContent} alt='ai content' />
      </div>
      <div className='grid-layout__manage-accounts'>
        <img
          src={IllustrationMultiplePlatforms}
          alt='multiple accounts and platforms'
        />
        <h2> Manage multiple accounts and platforms.</h2>
      </div>
      <div className='grid-layout__posting-schedule'>
        <h2>&nbsp;56%</h2>
        <p>faster audience growth</p>

        <img src={IllustrationAudienceGrowth} alt='audience growth' />
      </div>
      {/* <div className='grid-layout__best-time-post'>Best Time to Post</div> */}
      <div className='grid-layout__follower-growth'>
        <h2>Maintain a consistent posting schedule.</h2>

        <img src={IllustrationConsistentSchedule} alt='consistent schedule' />
      </div>
      <div className='grid-layout__grow-followers'>
        <img src={IllustrationGrowFollowers} alt='grow followers' />
        <h2>Grow followers with non-stop content.</h2>
      </div>
    </div>
  );
}

export default App;
