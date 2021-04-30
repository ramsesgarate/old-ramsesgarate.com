export default {
  computed: {
    isWebShareSupported() {
      if (!('share' in window.navigator)) {
        return false;
      }

      if ('canShare' in navigator) {
        const url = `https://${window.location.hostname}`;
        return window.navigator.canShare({ url });
      }
      return true;
    }
  },
  methods: {
    async onWebShare() {
      try {
        await navigator.share({
          url: this.shareUrl,
          text: this.shareText,
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    },
    onTwitterShare() {
      const url = new URL('https://twitter.com/share');
      url.searchParams.set('url', this.shareUrl);
      url.searchParams.set('text', this.shareText);
      window.open(url.toString(), 'share-twitter', 'width=550,height=235');
    }
  }
}