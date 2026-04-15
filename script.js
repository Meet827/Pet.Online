// ================= PET DATA =================
const pets = [
    {
        name: "Golden Retriever Puppy",
        price: "Rs 20000",
        image: "https://www.breednbreeder.com/Images/Golden_Retriever-Maharashtra-Pune-20250721_204701.png"
    },
    {
        name: "Persian Kitten",
        price: "Rs 5000",
        image: "https://preview.redd.it/do-persian-cats-shed-fur-during-summers-v0-lphcbaq01hfd1.jpeg?width=640&crop=smart&auto=webp&s=9c1ffe966376038149e38a0c2dfc665e988442df"
    },
    {
        name: "Green Indian Parrot",
        price: "Rs 2500/Couple",
        image: "https://i.dawn.com/large/2016/08/57b73d546cf35.jpg"
    },
    {
        name: "Beagle Dog",
        price: "₹17000",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg"
    },
    {
        name: "Rottweiler Puppy",
        price: "₹25000",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Rottweiler_puppy_face.jpg"
    },
    {
        name: "Goldfish",
        price: "₹200",
        image: "https://img.freepik.com/premium-photo/elegance-pet-goldfish-gracefully-swimming-its-aquarium_505557-27464.jpg"
    },
    {
        name: "Betta Fish",
        price: "₹300",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YrdL9O5uA_I7csQckf31RPjf-1eLQiFtXxXPFLILvV5i9cz23PeVu4Qr5rBgPSY_RKP6rHEu7Y9nhIR3MXF5QecoJqTkYFhK1ZGqe6DZ&s=10"
    },
    {
        name: "Hedgehog",
        price: "₹5000",
        image: "https://www.thesprucepets.com/thmb/Yu79mdSxOPWIV-snCkRljL-bMDA=/2075x0/filters:no_upscale():strip_icc()/GettyImages-626916125-5b3a4a8046e0fb00379f682d.jpg"
    },
    {
        name: "Sugar Glider",
        price: "₹8000",
        image: "https://d2zp5xs5cp8zlg.cloudfront.net/image-55903-800.jpg"
    }
];

// ================= PRODUCT DATA =================
const products = [
    {
        name: "Royal Canin Dog Food",
        price: "Rs 1200",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUXFhUQGBcVGRYYFhcZFRgXGBcWFRsYHiggGBolHRYVITEhKCktLi4uGB8zODMtOCgtLi0BCgoKDg0OGxAQGy0lHyYtLy0vLS8tLS0tKy0vLS0tLS0tKy0tLS0tLS0tLS0tLS0tLy0tLS0tLy8tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEkQAAIBAgMEBQgGCAMHBQAAAAECAAMRBBIhBQYxQRMyUWFxIkKBkaGxwdEUUlNicpIHFSMzgqLS8Bay8UNEVHODk+EkNMLD0//EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QANxEAAgECAwQHCAICAgMAAAAAAAECAxEEITESQVGhBRMUUmFx0RUiMoGRseHwQsEjM5LxNGLS/9oADAMBAAIRAxEAPwD7RLECAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBpxOICC5twJ10AA4knkIDds2c8d+MGDY117NEqkeghbGb9lrd37HG8fh07bXJ+h5/jnB/bj/ALdX+mOy1u7zXqPaGG73J+h7/jjB/bj8lX+mOy1u79h7Rw3e5P0PRvvg/tx+Sr/THZa3d+w9oYbvcn6Ho32wf26/kq/0x2Wt3fsPaGG73J+h6N9cH9uv5Kn9Mdlrd37E9vw/e5P0Mhvng/t1/LU/pkdmrd0dvw3e+/oZDfDCfbr+V/lHZq3dHb8N31zNi71YU8Ky+p/lI7PV4FljKD0kbBvJhz/tV9TfKR1NTgW7TS7xkNv0PtF9TfKR1VTgW6+lxMxtuj9ovqMjq58Ceup8TIbZpfaL7Y6ufAddDiZDa1L66+2NifAnrYcSZSqhvf8A6ShczkgQBAEAQBAEAQBAEAQBAEA5rfsn6JXt9QD1sLzbDf7YnNjcsPLyPmGytmrUpu5JGUgXFrDhe4OrXvy6trnSerUqOMkl+/vM+eo0Izg5P9/eW8zxmybVSqEKgQ1M71EdSocpmzIAOt5NrcbyY1fdu9fITw/v2jkrXu3423FdisO1N3pt1kZkNuF1JBt26iaRe0k0c847EnF7jVY9ssVuhr2wMhr2wMjNQe2QVbRvpKb8ZDZEVdllRB7ZhJnfCJNpX7ZmzoiibhkZiFBuTw4SknbM3jG7siyw+GNrMHv3Ad3adecyc+DN408s0yR9H7A/DmB6/aPXK7T8C2wuDNiUhlOjXFtSNOUKWZLiki/2H+7T+Ie0zmqfGddH4EWkqaCAIAgCAIAgCAIAgCAIAgHMb81B9GrrfyjTzAcyAy3t7Jthv90Tmxv/AI8vI+SYfHsilFy631IBK5hZsviNDPXlBN3Pm4VXGLiv3/sscNtUF71FUJ0ZpZES62LF+qzDzzfrC2ltBaQ6Xu5PO9/6+xaNdbfvLK1rJeN+PHxIW0cT0lWpUtbO71LdmZibe2aQjsxUeBjVntzcuLbI15YpY8zSLk2AaLixKoUHbqozfhUn3SjnFasKlOXwpsn4bZ1b7Kp6UYe8TOVWHFG1LDVL5xf0LGlgan2beqZOpHidsaE+BKp4Sp9m/wCUyjnHibKlPgzcoKkEgjxBErdMuotFiMah808/ONtZnss22093MyfGLyU/mPDTT2SNlk7S4GKYngMvpuYs7lm01Y6nY7jJTF9SGa3O2Yi85qnxnVR+BFpKmggCAIAgCAIAgCAIAgCAIBym/wAFNI/ssxVS5e9gqiwK997jT08pekm5pJ2ZlXko05OSuraHx5uM90+UNiGSijLHZ2xMRX1pUmI+sfJT8zWEzqVoQ+Jm9LC1avwr0LnD7kP/ALSoPBNf5rfCcssWv4o7odHP+T/f3wLCjujTH1T+IMx/zBf5Zm8TJnTHAwX7f9+hMo7tW4NUH/LVKftpoD7Zm6/l88/uzRYVLRv5WX2RubdoN1hVb8T1D8ZHXtaW+iLPCRlrd/Nni7r0xwo/5vnHaJP+RCwVNaRMv8PoP9kf5vnHXPiW7NDumDbHQeaR6T8ZPWMjqYrcergSvVdx4H5RtX1Q2LaNnjUqnNg34gCfWQTGQtIzFEAeUlu9SfjcR5MjzRqpUgb5Tz4HQ/I+uL8SbcC02ZU+jCpVrI5OXMrDhlzBcoB4G5v4e3kqOzbZ6WEoutKNOOVyfszemlWqLSVHBa9icttATyPYDMo1U3Y9DEdF1aNN1G00i9mp5ggCAIAgCAIAgCAIAgCAc7vr/wC2xH/KPvmlD/bHzMMX/ol5HzHZG69avZj+ypnz3B1/AvFvYO+epVxMIZLNnhUMDUqZvJcWdtsbdahTFxT6Rvr1dR6F4D1GcE8TOWrt5Hq0sDShorvi/Q6RMHe2Zie4cPROfb4HZscSSmEQeb69ZG0y2yjctIDgJUtYi7Ux1PD0mrVSQi2vYXOpAAA5kkiVnNQW0zahQnXqKnDVkGlvDQfCvi0zMiBiy2s4K8VIOgOo14ayirRcHNaG8sBVjiFQlZN28s95r3a3jp4qlUqlDT6MkOGOYAWzZgQBcWvy5SKVZVIt6WLY3o+eGqRhe+1p9iRsHb9DF5+hJulrhlKmxvZh3GxlqdWNT4TPFYGthrdYteGZbmnNDkNT4NDxUer5Syk1vKuKe4jPsdDwuPaPbLKqyjpLcQsbsp1UkWYd2h9U0VVMylSktDnittCLHWaXyMrZ2J9PadEqBnFrdU+4gz4WrTxspty2n88j7CODnTyjHTgbsBtHDrUU50HHXQcjNcDRrxxEJVE7K+vkymIw9eVNqzZdfr3Dfb0/XPqNuPE8vsOJ7j+hMw2JSouamwZeF1NxccpZNPQwqU503szVn4m2SZiAIAgCAIAgCAIAgEDHLdrEA+SNDw485G8NXRXvT8tSdT7B4CLixLpcDIJN1FoBJEArd5sLWq4aomHbJUIFjfLoCCwDeaSLi/fM6sZODUdTrwVSlTrxlVV4/tsih2CqNh2wGNqrVreUxpZy1RVFmC5ubi2bQ3FxMadtnq6ju+B34pyVZYrDRcY5Z2sm9L24PTxK7dHeBGw2JpYfCWFOm1dUzNV6TNcWqXFyeGg4gEDhM6FVOElGOnM6ekMFJV6c6tTVpN2tbyPdhbwmns6vVfCUwquKYWmppU6nSWU5uPC9ie8CTTrWpOTiMVglUxsIRqO7V7t3at9PkS91MVg6ODaumXCtVLUr1HZ/LS4XKTqVF78O28mjKnGntLK5lj6eJq4lUpe+o2eStk9b+LJu4WzsZS6VsVULo+Upep0lzqS6nkpBHj2CXw8Kkb7bMOla2FqbKoxs1e+Vvl5nXWnSeQAIBqxPA+EAp8ZhlewYcjrzGklSa0I2FJq5xGGwSMiN0oOdmTKilmzBQwQajMxB8B2zjUcj7SpiJRlKOxok7t2Vs1fwWXn4GS7LJay1EZOlGHDgggsWtYAa3t5VuyNhkPFpRu4tPZ2rW3W48vM2/qlc2XpRcqrKP2eZszMtlHSWOqcieIk7Bn2x7N9ne09bK1v/AFvv3pGezsZVwn7XMmUlA6Zhfy1LpmHmsVBIP+kmLcMyK9KljP8AHZ3zs7cHZ24q+TO/2bj0r0xUpm6nTvBHEHvE6YyUldHy+IoToTcJrMlSxiIAgCAIAgCAIAgELFdf+Ee8yGSV1c+UP75yAS14GAb6a6QDIPAMw8A4jb2y6eDr/T6aVKlRnZwpZVo02ZTmqVHIuq6toTxPhOOpTVOXWJXfI97CYmeKpdlk0kklfWTS0SXH+iBhcRtKtd6IZFY5j9Ho0qSMfrZ69mfxAMonWlmuStzZ0TjgaXu1LNrvScmvlG6Rvr0NqqNWrsvnBlw1dSOwrfMR4AyXGsuPJlIT6Pk8lFPznF/XQ0UB+sTTwtemUNLNlq4ZcqppcpWpOL0ibC17XPCVS61qElpvX9rcaSfYVKtSlfatdSd2/GMl8Xj4H0bA4daVNKSXyoq01vqbKLC874xUUkj5urUlUm5y1bubs0koeqYBqxJ0MArKurgd1oCdj5LiWxWAdqWY0wC+UlVKuGAUspYEEFVUH1ds5HtRyP0KmsNj4Kpa90r5u6tnZ2e5t/fgRBt2uNBWygMHAUIoDBgwYBQAGuBrxtpw0kbTNngaL1hfdnd5Wta7f7rqZJvBXU3WqBoqgBaQVcpYrkULlQguxBAB8o9sbTDwFGSs43+bu72vd3u72WTyyOq3c2bV2hSppUXJh6bIWqXJeqaaFAqX7mNzrbQC1rDWCc14HjY3EUuj6kpQd6kr2W6Kbvd/0svHifS8JhUpItOmoVFFgo4AToStkj5OpUnVm5zd295ukmYgCAIAgCAIAgCAQcX1/wCH4mQyStxR8of3zkA57Ze+nSVED0GSjVc0qVW9wzA2AYW7dNDofTOWGJu1dZPRnsV+idiEnGd5RV3HwN1ffm7uuGwtSutPRnW4XTjlsrad5teRLE52hG5NPoj3E61RQb0X60KO/tAtSujLSqXVqjEfs6n1GA5Wsc1+B7jaViotrhxIl0NVUZZpyW7iuK9PwWVPeVXxgwlJDUsCalRSMqWGg+9rYHvI462065OewjmeAlDDdfUduC3v0Ib720ateth+iFSnSpvWLEghmo2YhVI4X4N2j0yjrxlJxtdLP6HQujatOlCrtWcmlbgpZa/1wLvd3a30rDpXy5M2YZb3sVYrxsL8JrSqdZBSOHGYbs9Z073tv5kfeHeanhcqlWqVX6lNOseVz2C+nMns0MrVrKnlq+Brg8BPE3kmlFatlTR30S9ZqmFeliEomplcWLomuXPlBA15i0yWIWbcbOx2S6KnaChUUoOVstzfhe3Mvt3Nupi6Iqpoeq6XuUbs7xzBm9Kqqkbo8/GYSeGqbEvk+KIQ3tp/TjgmQrwUVCRYuVDBbW0BBsDfjylO0LrOrOj2bPsqxCd99vC9rkLG78mnTxLigD0FcYcDPbMPKux8nQ+QdNeIlJYmyk7aOx0UeiFUnTjt/FHa000y18SWN7EbGVMGUKlR5Lkjy2ChytraaE2180y6rp1HA559Gyjho10731XBXtc0bu7UfEqlZ1VQ6ggAk63YNe/gJelNzjtMxxuHhQqunFttP0sdOFBIBAPjrymhyJtaG3oV+qvqEmw25cWe9Cv1V9QgbcuJkBbhJIPYIEAQBAEAQBAEAQBAIOM64/D8TIZJV43j65BK1PmGxsMV+iPXZ/o7VaiqBfLTqhioJHYWAbTsbs18uEWtly0+zPsMRUUnVjSS20k/ONr/AGy+h0W6m8VLAU3wuKDU6lN2Oils9+B08NCdCLazajVjSjsTyaOHH4KpjZqvQacWlv0/fuebv7OGIo4+vUp5aVe9Skp5FOkYOvpYajv5RThtxnJrJk4zEdRUoUoyvKOTfnZW5FXsnHmngqeHwqXxWKNQsV6wRXdBYnhopA5DyjxmcJWpqMF7zOrEUVPFSq13/jha3m0n/f2Rr2JhHo16tOpS6Jhga91JBJuvXNiQL9nK0inFxk01b3WWxNWNWjGcJbS6yOfz0On/AEfbcoDD0cMagFUmoAlm1uzMNbW4d83wtSKgo3zPL6XwlZ1p1lH3cs/kkebfxAwu0qeLrKTRal0OcC/Rtr8/TmNuEVX1dZTlpb6E4SHacDKhTfvJ3txX79ke7d3qw+Io4mjRDvbDuxqZbKtreSb6i/haKleM4yUeAwvR1ahUp1KjS95ZXzf9HN7Cr4jBmnjBQYYdlRKhDArUU6B7Xup1BHK+nnTmpudK1S2W/wBT1MVChitrD7a20214eHj4/gm4vZwxmLxzUTd1SjiKLDmcqEAeI4d9pdw6ypNx8GjCnX7Lh6MaiybcZfV/b7FRVxBqYDF1G6z4mk7cvKZapOnLUzK96cm+KO6EFDF0orRRa5xLbauAZ8RtCtT/AHuGehXW3YFbOPUAf4bc5rKDc5yWqszipVowo0Kc/hmpJ/XL98ToNxxbC4f8J/zNOzD/AOtHh9KO+Ln5/wBHY0+I/vlNkcBIliBAEAQBAEAQBAEAQBAEAQDkN76+0FrJ9Dpo6dHrmydbMfrOOVpzVnVT9xHpYKGClB9ok07+OnyTOar7X2qhvVwisPuC54/cdvdM+srrWJ1ywvR08oVGvP8AKRtXfSuNH2e/G9v2nHjexpyO0y3w/foX9lUr+7XXL/6NlbfdWN6mz2YjhmF7eGZNJDxKesC0eiXH4KyXl/2SKO/QYH/05W3Jmty5eRLrE33GMuh3F/HfyX5MKe+NNStsKq2GUEMvkhspK6JoLtry8lvTCxC7pZ9F1Gnepf5PPXx8OaPV30psSxw4vc0iWZblePErqhjtCe4j2VOKSVTLXR6/XU00N6cMhDpg6atqQVyBhw7EuL5vYZCrQWkS8ujsRNOMqra8b+pLqb80ypDUAwsxKl1N8p4WK6k8hzkvEq2hnHoiallO2m7j8/qYUN8qCoVXCqqlSxQMgB0F1IC2za8O4yFiIpZRLy6KquV3Ubd9c/re5sq78UgBTOGupulgylABYajLbKeXhJeJjpYrHoipfb6zPXTP76ntPfSkpZ1woDFRcqyhmCBSq9S5tnIA+6wjtMVmokvoqpJKLqZeTsr6vXwz+RHO/VEqV+gEqWzkWWxa98xGTU35ynao9w19kVU79dnpv04ah9+2JYpgKl21J1ubCwuQmsntXCDKPodWSlWWX7xISbxbRqMOgwOT8Ya3ozZBLdbVfwx/eRXsOCpv/LWv5W/raOi3axm02xCjF0USllYkrkve3k8KjH2S9KVZy99ZHPjKWAjSvQm3L5+iOxnUeSIAgCAIAgCAIAgCAIAgCAQMb1x4fEyGSVuN63r98gEqmfKgFLvTvKcIyjKzZ83BgtgoXtU3PlTpw+H62+drHFi8WsPbK9znX/SCfqOP46fxpTo7A+9yOT2su5z/AAam38c/ajwah8aMjsD73Ie1o9zn+Au/bjj0p8WofCjHYH3uRPtaPc5/g3J+kA/UqH+Kn/8AnHYH3uRHtaPc5/g3U/0idtJ/zp/QI7A+9yHtaPc5/gscJ+kGgdGDp3lbj1qSf5ZSWBqLSzNYdKUW800dHgdtUqoulQMOZU3t+LmvpAnLOnKHxKx3U6tOorwaZPV785Q1NoaAaKx4wCrT94P75wC2pdYeEIEmWIEAQBAEAQBAEAQBAEAQBAIGO66+HxMhklbjut6/fIBJTrCAcN+lHr0f+p/9c9Lo/SXyPF6X1h8/6IO69Jfo1V8uHzCsi5sQBlCldRc85fEN9YlnpuMsHGPUttR1/kat46ND6PnoKuU4p1VgOK5FNgeOW97SaDnt2n3f7IxUafVXprLaf2LqvgqatiilPDDLWpKOnVRTVTSUsB2XOunfOdTk1G7ej011OuVKCc2lHJrXTQwwtDDZaj0lw3RfSsmauBbo+jUsKZOvHNbulpSqXSle+zu433lYQo2bio22t/Cyvb+iHg8NhK+YgBUw1V6pIGtXD6kA/WIYBdeTTSUqsLcZK3kzGEKFS7WkG35x/cvI5bGV87s4VVDMWCqAFUHgoA5CdsY7KSPKqS2pOVrGNCsyMGRirDgVJBHgRJaTVmRGTi7xdjst299GBCVyBfz+Cn/mAcPxj0gzz6+C/lT+noexhek/41fr6n0fCYkOLj0jS4vqOHEEagjQieae2nc8q84BWU/3g/vnALWl1h4SUCVJIEAQBAEAQBAEAQBAEAQBAIGP66+HxkMkrcd1vSffIBJTrD0QDh/0pdej/wBT3Up6XR/8vkeL0v8Aw+f9HK4epUOGqopTJnWow1z3BCgjkBdxx4624GdclHrE3qcEHPqZRVrXv4k7YVauiFAtEp0mYrXUkI4W+e1rg2FvRwmVZQbvne27ebYZ1IxskrX37nbUjYvF4l1qo6lhUqh3bKT5a+SApGluVvCXjGmmmnoik6laSlGS1efnoakWuaHQim2QVOm6pzZspX0iyty5S14Ke1fO1jNKq6exbK9+X4Gz6lamKqIhPSJ0TDKSbN5QsON7Le/ZE1CTTb0zIpupBSUVqrMjjB1Ps25+afN0b1W17Jptx4mXVT4GmWMwIIO13C28VdaDm/KmTz5mke46lextODGcGMw911kfmex0Zi2n1U9N3ofRWYEXHAi4nlnulbS/eD++cAtqXWHhJQJUkgQBAEAQBAEAQBAEAQBAEAgbQ66+HxkMkrsd1vSffIBvTrD0QDjf0m9HnpdI7r+8tlQPfSle93W3tm1HFrD3ur3PK6TjGTjtO2u6/DxRy+GohqeSm9dqdR7C2HU5nUXspzk5gL8Dwv3zb2lBtS2HwOKFG8NmLdm+7v8AqZ4dGXValfUqdcPmuamZEvdzfNZgO0iQ+kKb1gy0aUo6Sf8Ax45Gt64p2DV6q5gWs1AeUCzXOragnN7ZD6Qpb4MhrZ1m/wDiXextj1cTT6Wli/JznrU7HMBqRr2GXjjKUllE6KWGqVVtRnv4E4bnYi4b6UlxrfJ3IPci+qW7XTtbZ5l/Z9W99vl5ehsXdLEj/e05+YOd737eJjtVPu8yew1u/wAiIP0dv/xCflPzmntBd0w9kS73IzH6OX/4hfyH+qPaC7vMeyH3+Rvpfo4cEEYoAgggimbgjgR5Uh9IJ/x5krohp32+X5O0pggFWNyNbgWBvxIHIXzaTzX4HtK9syHR/eD0e+CS2o9YeElAlSSBAEAQBAEAQBAEAQBAEAQCBtDrL4fGQySuxvW9J+EgG+n1h6IBzu/m7VXFtT6JkGTOTnLDrBLWsp+qZlUg5WscOMw062zs2yuVuy9gY7DoqL9HYKzVASz3u2W5HkaHKrr4VDKqE4rcUpYevTioq2Xn6ea+ZFRsRRYa4fQUVIJqkEUmqMAfI59Jx5FQZj1yi9Vz9Dohg8Vqkt2/hf1KPa+CarlZqtBejp9HoavDM7X/AHfHy/dIck9/39DGt0ViqjTsslbU6vZdbBjDUaBqliguci1OuwOYkZdR5TDUc5vCrBK1z0KOEqU6ajYlVK+AVcjVTZvJ864uVNrgXH7tRqeXfLdfT4mvZ6nA1PjNmA5WrWJuLHNbwNltz4GOuhxHUVNLE5sXgCXJe+ewJs9tGzWXS3EAyHXpreT2epwJ2Gw2Hq9Rm6oW4upsuSx4DX9mstCtCfwsznTlDUyxm8uFwpFCpUYsqqDYFjwFsxGlyNfTOunhqk1tJZHDVxtGlLZk8yC++uE1IZzcW/dtr/d5fsdXw+pT2jQe9/Q2bC2tSxBLUifJIUgixBmNSlKm7SOijXhVV4nSUeuPCURsS5JAgCAIAgCAIAgCAIAgCAIBA2h1l8DIZJX43j6T8JANtPrD0QCViOsPAj3f+YBpYQDitu0CrNpfiJ5FaOzM9PDyvE5XaFTJkp2ujNxa5a4bNY35Wy215Qsza+eZnXRlKvTN1ZgrAkC4INjfm2gHfeWSyzD1yGJ6RkViq2BVzTPEgG9iToT3cOHGL2ZGzdZm0US5DrTy+UtTXL5QBvY2011/vWLcSyeRuwuIFZwuUiwDXIFiCSBax7vbKSvYnQ+gbuULAn0TrwkLK55uIldnzzaVb/19ZmJFq1QAgXNwSqgaHuE+pgv8KS4I+NqyviZNvezcc+Vhep54IC014E9110AOnC0zdvDmbJS0z+iLb9Gi/vmF7GoAL9wv/wDKcmN+KK8D0ejfhk/E+h0Ov/D8pxo9IlySBAEAQBAEAQBAEAQBAEAQCDtDrL6fhIZJXY7j6T8JAI2M2vRohalWoFU2txJNvqgamVlNRV2XhCU3aKIlLffBVXyLVytxAcFQfA8Jmq8HvNJYapHcXVOurdVgdA2h5HgfCa3MbNFdtfDKw4i/C1xc+Ewr0tpXNaVTZZwm29m3IVh5IYvz42trPPTcXY9ODUkRsHRHRDpAGyqWFwNNPJI77WBPjLXzJsV1OmOlyBRnzZspOhBGl734AeyW8SGi9r07U2F7EqwvrfXw1vrI2ksyLN5E7d3ZrMVJGoFvDtHhKQi6ksiK1RRR9BwdEIoUT1YR2VY8qUru5Qba3KpVqprio9NmOYhQCC3aOwn3zupYyUI7NrnmV+joVZ7d2mR/8C0h1q9dufWAHukvGy3RQXRsN8pfUl4OjTwqhKYso0Ucyxubk8zz9E525VJXZ1xjGjDZidBs83yk8cgPulXqaR0J8EiAIAgCAIAgCAIAgCAIAgEHaHFfT8JDJOE393wp4VuiBDVTrlvwBAsWtwHdxPtmU5tLLU2pUtrOWSPldDHVKq9LWcu5Zix7sxso7BbgJyVfiPQo5RPF2dVrONFDXzXBOYKQLUwBx4esnumnWwjGyRi6M5T2m8j6tuhs5sNhlWrfOSSRfRQeCjs0Fz3zWktmOZz1pKUsjgv0qbPDVRiFcq+UA3uAAhbKyniLX900TKSjlc+pYbDJisPSq6XdFc26tyNbem8xqUFMmFVwZSY/ddyCovl7vZwnE6FSOh2xxUXqRk3Ycur2IZdARz8ZCpVNLFniIFpR2GqHNVYLfmx19EnqLZ1HY56mLS0Oh2U9LVaWtrXNjbXgNZ20HT0huON1Ntk/D1la+VgbHKbEGxHI9hnQQb1N/Ae0wDCpwMA4naGNz4tEHBL372IN/Vw9c6qcLQb4nFVqbVRRW47XZvm/gHwnO9TrjoiwgkQBAEAQBAEAQBAEAQBAEAhbQ4r6fhIZJ8x3z3Rp1s9RQeksTe5OY2F731BmDhbNHRGonZM4PZOz3oPeohysSBfQXt/49856rurnXSunY+j7o7HFMHEMtmbqg8h268Ly2Hp295meKq3ewi3rYxycop3HaTYfOdDZzKKWdyp2ju2uJZWq65TopHkDXs+MlXIlJHZYTDrTRUQWVRYWlzI3QDVUxKKQrOoJ4AkAnloDxgFLtLGYaoQelLEC1qQzE87XANv9JhVoKo7tlZRubsLRqMoVVNClqWJP7VvH6vr5d+mlOnGCtElJItcDh1VQiDKg9Z/v/S0uSTXqhQO85QBxJ5Aeo+gGAQsTiQwemrrnsRZGBcW42vzlkms2sijkpXinmcJsvDEYjU3C6lu0EHKRfmb3nZKacbreefCDU7PcfR9ncvwD4Tjep6S0J8AQBAEAQBAEAQBAEAQBAEAh4/ivp+EhklLt5rI57AT7BKslHPYdhVdQ6LlWzDsvrrr4mU2U9TS7joy7xVZVOvztLFbMyoUmfqkHnJILNKQXQD+++SVNZo/VJHhw9UAeX90+sfOAaqlEMQzUkLDgTYkWN9Da41gGSUiOAReWg9AHLugHpKjVmF+8j2CTZkXSI2O22lJbgFtbaaDgeZ8JpCk5MxqV1BX1Gw9rdMSXsCp8kDkGFr699xf7wk1qWxaxGHrOpe4NI/SGqhGVQrKxYIAezJbUknW8Nrq7NhRfW7SX25FQAOlJtpfgOZAt8JMb2ErXudbs46j8A+ExeputCwkgQBAEAQBAEAQBAEAQBAEAiY/zfT8JDJOX2/iCykALZgRxzaWGumkNKxEW7lfs2gQovxAH9mUNWSsUCTzPDlIZZG3B2y6nXxI9wM2p6HLV1NjZe3+Yj3rNMzPI8ynkW9BDe4iAeHMPPI8cwjLgM+JgrN9f+Y/GTlwIV+J46seJHLzh2+MZEO550fePWIuLGjGYTOAM4Gt+BPI+Hb2y8JbLvYzqQ2la5uwWDWl+0GYkDidF15WHHwJMmU3PIiFNU/eJFTah1Fj2aDx79PRM+qRr1z0K6kb1IQZ2OzeI/APhMXqdK0LCAIAgCAIAgCAIAgCAIAgCARMf5vp+EhknE4xvLIGltfYJVybeZMYqKyJmEYGxHGwBEgsa8TfW1+z0QWMKdXKvDSwPAH+9LTWlrY56+UdoDFoez1lfYb39c6HBo5VUTMst/Ot4j5XlSx6EfzXPosfdGXAWe5mv9r5zkaniq/GT7vAi097PGFTk44jzKfbryj3eBDUuPJCz/afyU/6Yy4fcWlx5I8zOGUdKRe/BaQOg5eTF48PuNmXe5L0JApOeNap6qXxSTdcFz9SrhJ/yfL0MThTYk1HI7SVUetVEja8CVB72+XoVYo5nAS9gwJY6kgX08rW0XaJ2U9DvdmDUfgUe6c71Z1rRFhBIgCAIAgCAIAgCAeQBeALwBeARccer4mQyTjcWbVSO3X2f+JQsSaFHUEdg4SQba1C7Zr2t6j4wTc0tS4883s0tJi7NMrNXi0c5VaemeLc0DEsvVYj3eqTsp6ldtrRmxdtuOsFYeo+z5SOpT0J7VJa5kilvNTGjB18Dcez5Srw0txK6QprKV0TKW26LcKyfxBR/mEzdGa3G8cVSlpJfP8kxKwbgUPhY+4zNq2pupX0Nik9i+o/OMhmb0Zu0DwVffGRGfE0VgNWY3tzY/OSnwDS1Zym0N5FpsRRs7fW80eFut7p0UsO5O8sjixGNUFaGb5H07YbEqpbiaaE+JAvOCXxOx60LuCvwLS8gsIAgCAIAgCAeQBAPIB4TAMS0AxLwDTXNx7ZAKHa2BDMGsQRzHDTt9ZkWJueUMIeTDgOI+UixNyQ2AfW5XhyJ+UWLbSI7bPqZWsVuRYans4nSTDKWZSo7xaRS1d3q33PzH5Tt7RA854Wp4EZ92q/3PzH5SyxMDN4Or4EepuriT9n+Y/KWWKp+JlLAVnw+v4Iz7mYo86f5j8posZT8TnfRddu+X1NZ3IxXbS/Mf6Y7bT8SV0VW8DwbjYr61L8zf0ye20/Et7MrcUSaW6GOHCsg/wCpU+Cyva6PDki6wGJ73NkpN0cef95X/u1v6ZHa6Hd5IdgxXf5v0MW3ErN+8xKn0O/vtI7dBfDEt7LqS+Of3ZM2DuZRp1Mz3qkWN20S/wCEcfAkznqYuctMjrpdH0oZyzZ3eHIW/aZzHcbxUkgyDwD3NAPbwD2AIB7AEAQDy0AZYB5kgGJpwDw0BAMDhRAMDgFkAHBd5gGJwH3jAMDs37xgHn6r+8YB5+q/vn2QDz9VffMA9/VX3zAA2X94wDIbN+8YBmMB94+uAejADtMAyGDEkGYw4gGQowDIU4B7lgHtoAtAPYAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB//Z"
    {
        name: "Cat Toys",
        price: "Rs 999",
        image: "https://www.aplusapets.com/cdn/shop/files/183_1_1024x1024.jpg"
    },
    {
        name: "Bird Cage",
        price: "Rs 3000",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcResoqqZ-2uOnLmCXECKQjISfnyO2w9h30H6fMwkstjI5QKfBtL0VLwaPkJiYFV7ihVmaxDqbvnJaTFLiyLK-7JPfH4VZJ8nQ"
    }
];

const petGrid = document.getElementById("petGrid");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");
const homeSection = document.getElementById("home");

function displayPets(list) {
    petGrid.innerHTML = "";
    list.forEach(p => {
        petGrid.innerHTML += `
            <div class="pet-item">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        `;
    });
}

function displayProducts(list) {
    productGrid.innerHTML = "";
    list.forEach(p => {
        productGrid.innerHTML += `
            <div class="product-item">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>
        `;
    });
}

displayPets(pets);
displayProducts(products);

function performSearch() {
    let value = searchInput.value.toLowerCase().trim();

    const filteredPets = pets.filter(p =>
        (p.name + p.price).toLowerCase().includes(value)
    );

    const filteredProducts = products.filter(p =>
        (p.name + p.price).toLowerCase().includes(value)
    );

    displayPets(filteredPets);
    displayProducts(filteredProducts);

    if (value !== "") {
        homeSection.style.display = "none";
    } else {
        homeSection.style.display = "block";
    }
}

searchInput.addEventListener("input", performSearch);
