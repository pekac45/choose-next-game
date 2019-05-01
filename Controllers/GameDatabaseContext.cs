using Microsoft.EntityFrameworkCore;

namespace choose_next_game.Controllers
{
	public class GameDatabaseContext : DbContext
	{
		// <summary>
		// This property allows to manipoulate the video games table
		// </summary>
		public DbSet<Games> Games { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			// Specify the path of the database here
			optionsBuilder.UseSqlite("Filename=./games.sqlite");
		}
	}
}