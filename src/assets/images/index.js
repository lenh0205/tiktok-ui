const images = {
    logo: require('~/assets/images/logo.svg').default,
    noImage: require('~/assets/images/no-image.png'), 
    // svg thì mới cần default, .png thì không (cơ chế của webpack)
}
export default images