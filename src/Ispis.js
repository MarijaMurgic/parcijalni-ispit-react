function Ispis({ userValue, listRepos, handleReset }) {
    const repos = listRepos.map((listRepo) => {
      return <li key={listRepo.id}>{listRepo.name}</li>;
    });
  
    return (
      <div>
        <img src={userValue.avatar_url} alt="Logo" width={100} />
        <h2>{userValue.name}</h2>
        <p>BIO: {userValue.bio}</p>
        <p>Location: {userValue.location}</p>
        <h4>Repositories</h4>
        {repos}
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
  
  export default Ispis;
  