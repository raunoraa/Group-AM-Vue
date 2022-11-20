<template>
    <footer>
        <div class="footerContainer">
        <label>Copyright Information</label>
        </div>

        <div class="footerContainer">
        <label>Privacy Policy</label>
        </div>

        <div class="footerContainer">
        <label>Contacts</label>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

label{
    /*
    This prevents text highlighted with blue color inside the self made buttons
    Source: https://stackoverflow.com/questions/21003535/anyway-to-prevent-the-blue-highlighting-of-elements-in-chrome-when-clicking-quic
    */

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
label:focus{
    outline: none;
}

footer{
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    background-color: #092747;
    border-radius: 0.3em;
    bottom: 0;
}

.footerContainer{
    margin-left: 2.5em;
    margin-right: 2.5em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    padding: 1em;
    border-radius: 1em;
    background: rgb(201, 26, 26);
    cursor: pointer;
}
.footerContainer:hover{
    background: #7d0a0a;
}

@media (max-width:900px) {
    footer{
        align-items: center;
        justify-content: space-between;
    }
}

@media (max-width:700px) {
    .footerContainer{
        margin: 1em;
    }
}

@media (max-width:599px) {
    footer{
        flex-direction: column-reverse;
        justify-content: space-around;
    }
    .footerContainer{
        padding: 0.3em;
        margin: 0.75em;
        text-align: center;
        width: 90%;
    }
}

@media (max-width: 320px) {
    .footerContainer{
        width: 70%;
    }
}

label{
    text-align: center;
    font-weight: bold;
    color: rgb(192, 192, 237);
    cursor: pointer;
}
</style>