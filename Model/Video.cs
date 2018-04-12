namespace VideoTracker.Model
{
    public class Video
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public bool Watched { get; set; }
        public string Genre { get; set; }
    }
}