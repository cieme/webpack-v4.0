import '../assets/css/footer.styl'
export default {
    data() {
        return {
            author: "cieme"
        }
    },

    render() {
        return (
            <div id="footer">
                <span>write by {this.author}</span>
            </div>
        )
    }
}