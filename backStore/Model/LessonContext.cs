using Microsoft.EntityFrameworkCore;
namespace backStore
{
    public class LessonContext : DbContext
    {
        public LessonContext(DbContextOptions<LessonContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}