// import PropTypes from 'prop-types';

const Profile = ({profileUrl,profileName,profileTag,profileLocation,followers,views,likes}) => {
    return (
        <div class="profile">
        <div class="description">
            <img
                src={profileUrl}
                alt={profileName}
                class="avatar"
            />
            <p class="name">{profileName}</p>
            <p class="tag">{profileTag}</p>
            <p class="location">{profileLocation}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{likes}</span>
            </li>
        </ul>
    </div>
    );
}

// Profile.PropTypes = {
//     profileUrl: PropTypes.string,   
//     profileName: PropTypes.string,
//     profileTag: PropTypes.string,
//     profileLocation: PropTypes.string,
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
// };

export default Profile;

