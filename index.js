fetch("https://api.github.com/users/ashishsubedi/repos?sort=created")
	.then((response) => response.json())
	.then((repos) => {
		console.log(repos);
		$("#table").DataTable({
			destroy: true,
			data: repos,
			columns: [
				{ data: "id" },
				{ data: "name" },
				{ data: "html_url" },
				{ data: "created_at" },
				{ data: "stargazers_count" },
				{ data: "watchers_count" },
			],
		});
	});
