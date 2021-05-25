<script lang="ts">
	function getGreeting() {
		const hour = new Date().getHours();

		switch (true) {
			case hour >= 5 && hour < 12:
				return 'Good morning';
			case hour >= 12 && hour < 18:
				return 'Good afternoon';
			case hour >= 18 && hour < 23:
				return 'Good evening';
			case hour === 23 || (hour >= 0 && hour < 5):
				return 'Good night';
			default:
				return 'Welcome';
		}
	}

	// TODO: make the greeting look nicer
</script>

<p>{getGreeting()}</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@500&family=Pattaya&display=swap');
	p {
		color: cornflowerblue;
		font-family: 'Pattaya', sans-serif;
		font-size: xx-large;
		text-align: center;
	}
</style>
