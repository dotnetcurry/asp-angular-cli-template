using Microsoft.EntityFrameworkCore;

namespace VideoTracker.Model
{
    public class VideoTrackerContext: DbContext
    {
        public VideoTrackerContext(DbContextOptions<VideoTrackerContext> options)
            :base(options)
        {
        }

        public DbSet<Video> Videos { get; set; }
    }
}
