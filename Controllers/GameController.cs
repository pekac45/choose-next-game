using System.ComponentModel.DataAnnotations;

namespace choose_next_game.Controllers
{
	public class GameController
	{
		[Key]
		public int Id { get; set; }
		public string Title { get; set; }
		public int Hotness { get; set; }
	}
}