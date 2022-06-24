import React from "react"; import styled from "styled-components";
export const Login = ()=> {

		const handleClick = ()=> {
				const clientId = "1dcde7ba348c4a24858e8c69665406f6";
				const redirectUrl = "http://localhost:3000/";
				const apiUrl = "https://accounts.spotify.com/authorize";
				const scope = [
						"user-read-private",
						"user-read-email",
						"user-modify-playback-state",
						"user-read-playback-state",
						"user-read-currently-playing",
						"user-read-recently-played",
						"user-top-read",
				];

				window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
		}

		return (
				<Container>
						<img 
								src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
								alt="spotify" />
						<button onClick={handleClick}>Connect Spotify</button>
				</Container>
		)
}

const Container = styled.div`
	display: flex;	
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: #1db954;
  gap: 5rem;

	img {
		height: 20vh;
	}

	button {
		padding: 1rem 5rem; 
		border-radius: 5rem;
		border: none;
		background-color: black;
		color: #49f585;
		font-size: 1.4rem;
		cursor: pointer;
	}
`


