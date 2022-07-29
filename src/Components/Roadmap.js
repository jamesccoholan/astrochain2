import "./Roadmap.css";
import { Stack } from "@mui/material";

const roadmapContent = [
  {
    phase: 1,
    titleClass: "phase-one",
    descriptionClass: "phase-one-description",
    title: "Phase One",
    description: [
      "Mint Date:",
      "Reveal Date:",
      "First and Second Community Written Episode",
      "Multiple giveaways, contests, and AMAs",
      "Guest Star submissions due"
    ]
  },
  {
    phase: 2,
    titleClass: "phase-two",
    descriptionClass: "phase-two-description",
    title: "Phase Two",
    description: [
      "Guest Star submissions voted on",
      "Third and Fourth Community Written Confessional",
      "Multiple contests and a surprise limited airdrop",
      "Guest Star Winners to be featured in our Discord and Twitter",
      "“Where Are They Now” Submissions due"
    ]
  },
  {
    phase: 3,
    titleClass: "phase-three",
    descriptionClass: "phase-three-description",
    title: "Phase Three",
    description: [
      "Top 500 producers will be locked and submissions for Next Season due",
      "Fifth Community Written Episode",
      "Guest Star episodes drop",
      "“Where Are they Now” winners chosen and displayed",
      "5 characters for next season are chosen"
    ]
  }
]

function Roadmap() {
  const roadmapText = roadmapContent.map(r => {
    return (
      <div key={r.phase}>
        <text class={`${r.titleClass} phase-title`}>{r.title}</text>
        <ul class={`${r.descriptionClass} phase-description`}>
          {r.description.map(d => {
            return (
              <li>{d}</li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div class="roadmap-section">
      <section id="roadmap-section" />
      <Stack direction="column">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
          alignItems="center"
        >
          <div className="Roadmap-Main2">
            <Stack direction="row">
              {roadmapText}
            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default Roadmap;
