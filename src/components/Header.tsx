import useMusicPlayer from "../hooks/useMusicPlayer";

export default function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <p className="moving-text">{currentTrackName}</p>
    </div>
  );
}
