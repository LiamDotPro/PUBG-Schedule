<template>
  <div class="PageTopInfo">
    <div class="tile-holder">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-9">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification box">
                <p class="title">Upcoming Tournaments</p>
                <b-table
                  :data="isEmpty ? [] : tableDataUpcoming"
                  :striped="true"
                  :narrowed="true"
                  :paginated="true"
                  :pagination-simple="true"
                  :per-page="7"
                  :loading="isLoading"
                >

                  <template scope="props">
                    <b-table-column label="Host" centered>
                      {{ props.row.host }}
                    </b-table-column>

                    <b-table-column label="Name" centered>
                      {{ props.row.name }}
                    </b-table-column>

                    <b-table-column label="Location" centered>
                      {{ props.row.location }}
                    </b-table-column>

                    <b-table-column label="Start" centered>
                      {{ props.row.startDate }}
                    </b-table-column>

                    <b-table-column label="End" centered>
                      {{ props.row.endDate }}
                    </b-table-column>

                    <b-table-column label="Prize Pool" centered>
                      {{ props.row.prize }}
                    </b-table-column>

                    <b-table-column label="Link" centered>
                      <a :href="props.row.link" target="_blank"><i class="material-icons">open_in_browser</i></a>
                    </b-table-column>
                  </template>

                  <template slot="empty">
                    <section class="section">
                      <div class="content has-text-grey has-text-centered">
                        <p>
                          <b-icon
                            icon="ship"
                            size="is-large" pack="fa">
                          </b-icon>
                        </p>
                        <p>Feelsbadman, maybe if we all tweet <a href="https://twitter.com/playerunknown?lang=en">here</a> we'll get more events</p>
                      </div>
                    </section>
                  </template>
                </b-table>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification box">
                <p class="title">Recent Tournaments</p>

                <b-table
                  :data="isEmpty ? [] : tableDataRecent"
                  :striped="true"
                  :narrowed="true"
                  :paginated="true"
                  :per-page="7"
                  :pagination-simple="true"
                  :loading="isLoading"
                >

                  <template scope="props">
                    <b-table-column label="Host" centered>
                      {{ props.row.host }}
                    </b-table-column>

                    <b-table-column label="Name" centered>
                      {{ props.row.name }}
                    </b-table-column>

                    <b-table-column label="Location" centered>
                      {{ props.row.location }}
                    </b-table-column>

                    <b-table-column label="Start" centered>
                      {{ props.row.startDate }}
                    </b-table-column>

                    <b-table-column label="End" centered>
                      {{ props.row.endDate }}
                    </b-table-column>

                    <b-table-column label="Prize Pool" centered>
                      {{ props.row.prize }}
                    </b-table-column>

                    <b-table-column label="Link" centered>
                      <a :href="props.row.link" target="_blank"><i class="material-icons">open_in_browser</i></a>
                    </b-table-column>
                  </template>

                  <template slot="empty">
                    <section class="section">
                      <div class="content has-text-grey has-text-centered">
                        <p>
                          <b-icon
                            icon="ship"
                            size="is-large" pack="fa">
                          </b-icon>
                        </p>
                        <p>This is likely a problem, better call Rick..</p>
                      </div>
                    </section>
                  </template>
                </b-table>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification box">
              <p class="title">Tournament Statistics</p>
              <p class="subtitle">Let's take a glance at the tournament stats!</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification box">
            <div class="content">
              <p class="title">Players Live Streams</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PageTopInfo',
    data() {
      return {
        isEmpty: false,
        isLoading: false,
        tableDataRecent: [
          {
            host: 'Gamescom',
            name: 'Gamescom Invitational 2017',
            location: 'Cologne, Germany',
            startDate: 'August 23rd 2017',
            endDate: 'August 26th 2017',
            prize: '$350,000',
            link: 'https://gamersoutreach.org/'
          },
          {
            host: 'DreamHack',
            name: 'DreamHack Summer 2017',
            location: 'Jönköping, Sweden',
            startDate: 'June 17th 2017',
            endDate: 'June 20th 2017',
            prize: '$3600',
            link: 'https://dreamhack.se/dhs17/2017/05/31/pubg-at-dhs17/'
          },
          {
            host: 'Gamers Outreach',
            name: 'Charity Invitational 2017',
            location: 'Online',
            startDate: 'May 4th 2017',
            endDate: 'May 4th 2017',
            prize: '$123,357',
            link: 'https://gamersoutreach.org/'
          }
        ],
        tableDataUpcoming: [
          {
            host: 'Intel',
            name: 'IEM Oakland PUBG Invitational',
            location: 'Oakland, California',
            startDate: 'November 18th 2017',
            endDate: 'November 19th 2017',
            prize: '$200,000',
            link: 'http://en.intelextrememasters.com/season-12/oakland/pubg/'
          }
        ]
      }
    },
    methods: {
      testAxios: function () {
        axios.get('http://localhost:2000/test').then(res => {
          this.pair = res.data.Data.Buy[0].Price
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  .PageTopInfo {
    .tile-holder {
      margin: 20px 10px 0 10px;
    }
  }

  .box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
  }

</style>
