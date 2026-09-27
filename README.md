# zqyq.github.io

Personal academic homepage of Dr. Qi Zhang (张琦), Associate Professor at Shenzhen University,
PI of [iMUSE Lab](https://zqyq.github.io/group/). Hosted by GitHub Pages and built with Jekyll.

## Pages

| URL | Source | What lives there |
|---|---|---|
| `/` | `index.html` | Identity, news, selected publications, research summary, recruiting, service |
| `/research/` | `research/index.html` | Research directions, each followed by the papers in it |
| `/publications/` | `publications/index.html` | Every paper, newest first, plus patents |
| `/group/` | `group/index.html` | iMUSE members, alumni, papers with group members, call for students |
| `/about/` | `about/index.html` | Appointments, funding, teaching, patents, full service list |
| `/cv/` | `cv/index.html` | Same content, styled for Print / Save as PDF |
| `/blog/` | `_posts/*.md` | News items |

## Editing

**Add a paper** — append one entry to `_data/publications.yml`. Home, Publications, Group and CV all
render from this file, so nothing else needs to be touched.

```yaml
  - id: short-kebab-id            # unique, used for anchors
    title: "Full paper title"
    year: 2027
    venue: CVPR                   # short badge label
    venue_full: "IEEE/CVF Conference on Computer Vision and Pattern Recognition"
    kind: conference              # conference | journal
    status: accepted              # published | accepted | to_appear
    pages: "1-12"                 # optional
    volume: "39"                  # journals only
    issue: "10"
    authors: ["Qi Zhang", "Student Name", "Antoni B. Chan"]
    corr: ["Qi Zhang"]            # corresponding authors, marked with *
    links:                        # delete the ones you do not have
      landing: "https://openaccess.thecvf.com/..."
      pdf: "..."
      arxiv: "https://arxiv.org/abs/..."
      code: "https://github.com/zqyq/..."
      dataset: "..."
      project: "..."
    selected: true                # show on the home page
    topic: crowd                  # crowd | 3d | beyond — groups papers on /research/
```

**Add a student** — one entry in `_data/members.yml` (`phd`, `master` or `alumni`) and drop the portrait
at `group/photos/<Exact Name>.jpg`. Alumni move from `phd`/`master` to `alumni` with `period` and `where`.

**Post news** — create `_posts/YYYY-MM-DD-Title-Slug.md` with `layout: post`, a `title`, and a `date`.
The five newest appear on the home page automatically.

**Identity links** — `scholar`, `orcid` and `dblp` in `_config.yml` are currently empty; fill them and the
chips on the home page and About page appear.

## Conventions

- Bold marks the site owner in an author list; `*` marks the corresponding author.
- `link pending` appears where no verified URL exists yet. Do not fill it with a guessed link.
- CCF rankings are deliberately **not** shown anywhere until each grade is verified against the official
  catalogue.

## Local preview

GitHub Pages builds the site; no local toolchain is required. To preview before pushing, run the Liquid
subset builder that lives outside this repository (`tools/preview_build.py`) and serve the output folder.
