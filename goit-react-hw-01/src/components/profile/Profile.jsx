import './Profile.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className="profile-0">
          <div>
            <img className='avatar' src={image} alt='' />
            <p className="name">{name}</p>
            <p className="under-name">@{tag}</p>
            <p className="under-name">{location}</p>
          </div>

          <ul className="list-task-1">
            <li className="list-task-1-part">
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li className="list-task-1-part">
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li className="list-task-1-part">
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
          </ul>
        </div>
    )
}
export default Profile;