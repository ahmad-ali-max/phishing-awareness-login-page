
function analyzeAccount() {

    // Get values
    let username = document.getElementById("username").value.trim();

    let followers = Number(
        document.getElementById("followers").value
    );

    let following = Number(
        document.getElementById("following").value
    );

    let posts = Number(
        document.getElementById("posts").value
    );

    let age = Number(
        document.getElementById("age").value
    );

    let picture = document.getElementById("picture").value;

    let bio = document.getElementById("bio").value.trim();


    // Validation

    if (username === "") {
        alert("Please enter username");
        return;
    }

    if (
        followers < 0 ||
        following < 0 ||
        posts < 0 ||
        age < 0
    ) {
        alert("Please enter valid values");
        return;
    }


    // Risk score

    let score = 0;

    let reasons = [];


    // Account age

    if (age < 3) {

        score += 25;

        reasons.push(
            "⚠️ Account is less than 3 months old."
        );

    } else if (age < 6) {

        score += 15;

        reasons.push(
            "⚠️ Account is relatively new."
        );

    } else {

        reasons.push(
            "✅ Account age does not show a major risk signal."
        );
    }


    // Profile picture

    if (picture === "no") {

        score += 20;

        reasons.push(
            "⚠️ Profile does not have a picture."
        );

    } else {

        reasons.push(
            "✅ Profile picture is available."
        );
    }


    // Posts

    if (posts === 0) {

        score += 20;

        reasons.push(
            "⚠️ Account has no posts."
        );

    } else if (posts < 5) {

        score += 10;

        reasons.push(
            "⚠️ Account has very few posts."
        );

    } else {

        reasons.push(
            "✅ Account has some posting activity."
        );
    }


    // Followers / Following ratio

    if (followers === 0 && following > 20) {

        score += 20;

        reasons.push(
            "⚠️ No followers but following many accounts."
        );

    } else if (
        following > 0 &&
        followers / following < 0.1
    ) {

        score += 15;

        reasons.push(
            "⚠️ Followers/following ratio is unusual."
        );

    } else {

        reasons.push(
            "✅ Followers/following ratio does not show a strong signal."
        );
    }


    // Bio

    if (bio === "") {

        score += 10;

        reasons.push(
            "⚠️ Profile has no bio."
        );

    } else {

        reasons.push(
            "✅ Profile contains a bio."
        );
    }


    // Maximum score

    if (score > 100) {
        score = 100;
    }


    // Result elements

    document.getElementById("score").innerText =
        score + "%";


    let title = document.getElementById("result-title");

    let description =
        document.getElementById("result-description");


    // Result classification

    if (score >= 70) {

        title.innerText =
            "⚠️ High Risk Profile";

        description.innerText =
            "This profile contains several suspicious signals. " +
            "It should be investigated further.";

    } else if (score >= 40) {

        title.innerText =
            "🟠 Medium Risk Profile";

        description.innerText =
            "Some suspicious signals were detected. " +
            "More information is needed.";

    } else {

        title.innerText =
            "🟢 Low Risk Profile";

        description.innerText =
            "Only a few suspicious signals were detected.";

    }


    // Display reasons

    let reasonsList =
        document.getElementById("reasons-list");

    reasonsList.innerHTML = "";


    reasons.forEach(function(reason) {

        let li = document.createElement("li");

        li.innerText = reason;

        reasonsList.appendChild(li);

    });


    // Scroll to result

    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });
}
```
