import getPoster from 'services/getDefaultImg';

export const CastItem = ({
  cast: { profile_path, name, character },
  index,
}) => {
  return (
    <li key={index}>
      <div>
        <img src={getPoster(profile_path)} alt="Foto_Profile" width={'300px'} />
        <h3>{name}</h3>
        <p>Character:{character}</p>
      </div>
    </li>
  );
};
