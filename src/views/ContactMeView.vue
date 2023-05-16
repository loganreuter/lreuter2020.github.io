<template>
  <section id="contact" class="contact">
    <div class="contact-wrapper">
        <div class="info">
            <h1>Contact Me</h1>

            <div class="contact-info-wrapper">
                <span class="email contact-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    lareuter@ucdavis.edu
                </span>
                <span class="phone contact-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
                    (707)328-1349
                </span>
            </div>
            <div class="links">
                <a id="linkedin" class="link">
                    <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a id="github" class="link">
                    <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                </a>
            </div>
            <button class="portfolio button">
                Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>
            </button>

        </div>
        <div class="form">
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button class="button send">Submit</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "ContactMeView"
}
</script>

<style lang="scss" scoped>
#contact{
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    box-sizing: border-box;
    background-color: rgba(var(--white), 0.1);

    .contact-wrapper{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        column-gap: 4rem;
        row-gap: 4rem;
    }

    svg{
        fill: rgba(var(--white), 1);
    }
}

.info{
    display: flex;
    flex-flow: column nowrap;
    row-gap: 2rem;
    text-align: left;
    min-width: 25rem;
    height: 100%;

    h1{
        font-size: 48px;
        margin: 0;
    }

    .contact-info-wrapper{
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.75rem;

        .contact-info{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            column-gap: 1rem;
        }
    }

    .links{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 2rem;

        .link{
            width: 2rem;
            height: 2rem;

            .link-icon{
                width: 100%;
                height: 100%;
                opacity: 0.5;
            }

            &:hover{
                cursor: pointer;
                .link-icon{
                    opacity: 0.75;
                }
            }
        }
    }
}

.form{
    display: flex;
    flex-flow: column nowrap;
    row-gap: 0.5rem;
    color: var(--text-color);

    font-size: 16px;

    input, textarea{
        font-size: inherit;
        font: inherit;
        color: inherit;
        padding: 1rem 1rem;
        border-radius: 5px;
        background-color: rgba(var(--light-purple), 0.25);
        border: none;

        &::placeholder{
            color: rgba(var(--white), 0.5);
        }
        resize: none;
    }
}

.button{
    padding: 0.5rem 1.5rem;
    font-size: 16px;
    color: inherit;
    background-color: rgba(var(--light-purple), 0.75);
    border-radius: 5px;
    width: fit-content;
    box-sizing: border-box;
    border: none;

    &.portfolio{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        column-gap: 1.5rem;
    }
}

</style>