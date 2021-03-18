import HttpService from './httpService'

export default class SpotifyService {
  static async getCurrentlyPlaying(token) {
    // Make a call using the token
    return HttpService.get('/v1/me/player', token)
  }
}
