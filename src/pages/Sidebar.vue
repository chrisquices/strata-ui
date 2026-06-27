<script setup lang="ts">
import ComponentContent from "@app/component/ComponentContent.vue";
import {ref} from 'vue';
import {
  LayoutDashboard, Inbox, Users, Settings, FileText, Star, Folder, Archive,
  Bell, Plus, Filter, MoreHorizontal, Pencil, Trash2, PanelLeftClose, PanelLeftOpen,
} from '@lucide/vue';

import Sidebar from '@ui/Sidebar/Sidebar.vue';
import SidebarHeader from '@ui/Sidebar/SidebarHeader.vue';
import SidebarBrand from '@ui/Sidebar/SidebarBrand.vue';
import SidebarActions from '@ui/Sidebar/SidebarActions.vue';
import SidebarSection from '@ui/Sidebar/SidebarSection.vue';
import SidebarSectionCaption from '@ui/Sidebar/SidebarSectionCaption.vue';
import SidebarMenu from '@ui/Sidebar/SidebarMenu.vue';
import SidebarMenuItem from '@ui/Sidebar/SidebarMenuItem.vue';
import SidebarMenuBadge from '@ui/Sidebar/SidebarMenuBadge.vue';
import SidebarMenuAction from '@ui/Sidebar/SidebarMenuAction.vue';
import SidebarMenuSub from '@ui/Sidebar/SidebarMenuSub.vue';
import SidebarFooter from '@ui/Sidebar/SidebarFooter.vue';
import Button from '@ui/Button/Button.vue';

import ComponentHeader from '@app/component/ComponentHeader.vue';
import ComponentHeaderTitle from '@app/component/ComponentHeaderTitle.vue';
import ComponentHeaderDescription from '@app/component/ComponentHeaderDescription.vue';
import ComponentItemSection from '@app/component/ComponentItemSection.vue';
import ComponentItemSectionTitle from '@app/component/ComponentItemSectionTitle.vue';
import ComponentItemSectionDescription from '@app/component/ComponentItemSectionDescription.vue';
import ComponentItemSectionExample from '@app/component/ComponentItemSectionExample.vue';

const workspaceSelection = ref('inbox');
const filesSelection = ref('all-files');
const documentsSelection = ref('report');
const rightSidebarSelection = ref('dashboard');
const projectsOpen = ref(true);
const archiveOpen = ref(false);
const collapsed = ref(false);
</script>

<template>

  <!-- Header -->
  <ComponentHeader>

    <!-- Title -->
    <ComponentHeaderTitle>Sidebar</ComponentHeaderTitle>

    <!-- Description -->
    <ComponentHeaderDescription>
      A vertical navigation shell — brand/actions header, scrollable sections of menu items, and a footer.
    </ComponentHeaderDescription>
  </ComponentHeader>

  <ComponentContent>

    <!-- Brand header -->
    <ComponentItemSection>
        <ComponentItemSectionTitle>Brand header</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          SidebarBrand composes SidebarHeader with the app logo and an XL-hidden close button.
          SidebarSectionCaption labels a group. SidebarMenuBadge shows a count in the item row.
          SidebarFooter pins content below the scroll area.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[420px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarBrand/>
              <SidebarSection>
                <SidebarSectionCaption>Workspace</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="workspaceSelection === 'dashboard'" @click="workspaceSelection = 'dashboard'">
                    <template #icon>
                      <LayoutDashboard class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'inbox'" @click="workspaceSelection = 'inbox'">
                    <template #icon>
                      <Inbox class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Inbox
                    <template #badge>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </template>
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'team'" @click="workspaceSelection = 'team'">
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Team
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'settings'" @click="workspaceSelection = 'settings'">
                    <template #icon>
                      <Settings class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Settings
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarFooter>
                <div class="h-control px-4 flex items-center text-xs text-faint">v1.0.0</div>
              </SidebarFooter>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Actions header -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Actions header</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          SidebarActions renders New + Filter buttons by default. Replace them by passing content into its default slot.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex gap-4">
            <div class="flex h-[240px] flex-1 overflow-hidden rounded-large border border-border">
              <Sidebar>
                <SidebarActions/>
                <SidebarSection>
                  <SidebarSectionCaption>Default slot</SidebarSectionCaption>
                  <SidebarMenu>
                    <SidebarMenuItem :selected="filesSelection === 'all-files'" @click="filesSelection = 'all-files'">
                      <template #icon>
                        <FileText class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      All files
                    </SidebarMenuItem>
                    <SidebarMenuItem :selected="filesSelection === 'starred'" @click="filesSelection = 'starred'">
                      <template #icon>
                        <Star class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      Starred
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarSection>
              </Sidebar>
              <div class="flex-1 bg-background"/>
            </div>
            <div class="flex h-[240px] flex-1 overflow-hidden rounded-large border border-border">
              <Sidebar>
                <SidebarActions>
                  <div class="flex items-center gap-1">
                    <Button variant="secondary" size="sm" icon aria-label="New">
                      <Plus class="size-icon"/>
                    </Button>
                    <Button variant="ghost" size="sm" icon aria-label="Filter">
                      <Filter class="size-icon"/>
                    </Button>
                    <Button variant="ghost" size="sm" icon aria-label="Notifications">
                      <Bell class="size-icon"/>
                    </Button>
                  </div>
                </SidebarActions>
                <SidebarSection>
                  <SidebarSectionCaption>Custom slot</SidebarSectionCaption>
                  <SidebarMenu>
                    <SidebarMenuItem :selected="filesSelection === 'all-files'" @click="filesSelection = 'all-files'">
                      <template #icon>
                        <FileText class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      All files
                    </SidebarMenuItem>
                    <SidebarMenuItem :selected="filesSelection === 'starred'" @click="filesSelection = 'starred'">
                      <template #icon>
                        <Star class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      Starred
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarSection>
              </Sidebar>
              <div class="flex-1 bg-background"/>
            </div>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Custom SidebarHeader -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Custom header</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          SidebarHeader is the raw chrome-height bar underlying SidebarBrand and SidebarActions.
          Use it directly to compose any header layout with justify-between and full slot control.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[220px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarHeader>
                <div class="flex items-center gap-2 min-w-0">
                  <div class="size-6 rounded-small bg-foreground/20 shrink-0"/>
                  <span class="text-sm font-medium truncate">Acme Corp</span>
                </div>
                <Button variant="ghost" size="sm" icon aria-label="More options">
                  <MoreHorizontal class="size-icon"/>
                </Button>
              </SidebarHeader>
              <SidebarSection>
                <SidebarMenu>
                  <SidebarMenuItem :selected="true">
                    <template #icon>
                      <LayoutDashboard class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Team
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Nested menus -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Nested menus</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          Provide a #submenu slot to make an item collapsible — it renders a ChevronRight toggle and wraps
          the submenu in a Collapsible. Control open state with v-model:open or seed it with default-open.
          SidebarMenuSub renders the nested list with an indented left border.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[500px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarActions/>
              <SidebarSection>
                <SidebarSectionCaption>Files</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem href="#all-files" :selected="filesSelection === 'all-files'" @click="filesSelection = 'all-files'">
                    <template #icon>
                      <FileText class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    All files
                  </SidebarMenuItem>
                  <SidebarMenuItem v-model:open="projectsOpen" default-open>
                    <template #icon>
                      <Folder class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Projects
                    <template #badge>
                      <SidebarMenuBadge>3</SidebarMenuBadge>
                    </template>
                    <template #submenu>
                      <SidebarMenuSub align-icons>
                        <SidebarMenuItem href="#starred" :selected="filesSelection === 'starred'" @click="filesSelection = 'starred'">
                          <template #icon>
                            <Star class="size-icon shrink-0" aria-hidden="true"/>
                          </template>
                          Starred
                        </SidebarMenuItem>
                        <SidebarMenuItem href="#drafts" :selected="filesSelection === 'drafts'" @click="filesSelection = 'drafts'">
                          Drafts
                          <template #badge>
                            <SidebarMenuBadge>3</SidebarMenuBadge>
                          </template>
                        </SidebarMenuItem>
                        <SidebarMenuItem v-model:open="archiveOpen">
                          <template #icon>
                            <Archive class="size-icon shrink-0" aria-hidden="true"/>
                          </template>
                          Archive
                          <template #submenu>
                            <SidebarMenuSub>
                              <SidebarMenuItem href="#arch-2026" :selected="filesSelection === 'arch-2026'"
                                               @click="filesSelection = 'arch-2026'">2026
                              </SidebarMenuItem>
                              <SidebarMenuItem href="#arch-2025" :selected="filesSelection === 'arch-2025'"
                                               @click="filesSelection = 'arch-2025'">2025
                              </SidebarMenuItem>
                            </SidebarMenuSub>
                          </template>
                        </SidebarMenuItem>
                      </SidebarMenuSub>
                    </template>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- SidebarMenuAction -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Menu action</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          SidebarMenuAction renders an absolutely-positioned icon button on the item's right edge.
          Place it in the #badge slot and use opacity-0 group-hover/sidebar-menu-item:opacity-100
          to reveal it on hover. Use @click.stop to prevent the action from triggering item navigation.
          Supports disabled and asChild props.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[240px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarActions/>
              <SidebarSection>
                <SidebarSectionCaption>Documents</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="documentsSelection === 'report'" @click="documentsSelection = 'report'">
                    <template #icon>
                      <FileText class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Q4 Report
                    <template #badge>
                      <SidebarMenuAction class="opacity-0 group-hover/sidebar-menu-item:opacity-100"
                                         aria-label="More options" @click.stop>
                        <MoreHorizontal class="size-icon-small"/>
                      </SidebarMenuAction>
                    </template>
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="documentsSelection === 'notes'" @click="documentsSelection = 'notes'">
                    <template #icon>
                      <FileText class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Meeting notes
                    <template #badge>
                      <SidebarMenuAction class="opacity-0 group-hover/sidebar-menu-item:opacity-100" aria-label="Rename"
                                         @click.stop>
                        <Pencil class="size-icon-small"/>
                      </SidebarMenuAction>
                    </template>
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="documentsSelection === 'draft'" @click="documentsSelection = 'draft'">
                    <template #icon>
                      <FileText class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Draft
                    <template #badge>
                      <SidebarMenuAction disabled aria-label="Delete (disabled)" @click.stop>
                        <Trash2 class="size-icon-small"/>
                      </SidebarMenuAction>
                    </template>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Icon alignment -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Icon alignment</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          alignIcons on SidebarMenu or SidebarMenuSub reserves a leading icon-sized slot via ::before
          for items that have no icon, keeping all labels horizontally aligned across the group.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex gap-4">
            <div class="flex h-[240px] flex-1 overflow-hidden rounded-large border border-border">
              <Sidebar>
                <SidebarActions/>
                <SidebarSection>
                  <SidebarSectionCaption>Without alignIcons</SidebarSectionCaption>
                  <SidebarMenu>
                    <SidebarMenuItem :selected="true">
                      <template #icon>
                        <Star class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      Starred
                    </SidebarMenuItem>
                    <SidebarMenuItem>Drafts</SidebarMenuItem>
                    <SidebarMenuItem>Sent</SidebarMenuItem>
                  </SidebarMenu>
                </SidebarSection>
              </Sidebar>
              <div class="flex-1 bg-background"/>
            </div>
            <div class="flex h-[240px] flex-1 overflow-hidden rounded-large border border-border">
              <Sidebar>
                <SidebarActions/>
                <SidebarSection>
                  <SidebarSectionCaption>With alignIcons</SidebarSectionCaption>
                  <SidebarMenu align-icons>
                    <SidebarMenuItem :selected="true">
                      <template #icon>
                        <Star class="size-icon shrink-0" aria-hidden="true"/>
                      </template>
                      Starred
                    </SidebarMenuItem>
                    <SidebarMenuItem>Drafts</SidebarMenuItem>
                    <SidebarMenuItem>Sent</SidebarMenuItem>
                  </SidebarMenu>
                </SidebarSection>
              </Sidebar>
              <div class="flex-1 bg-background"/>
            </div>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Disabled -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Disabled</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          disabled suppresses pointer events and visually dims the item. Works on both button-mode
          and link-mode (href) items; link items receive aria-disabled instead of the disabled attribute.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[240px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarActions/>
              <SidebarSection>
                <SidebarMenu>
                  <SidebarMenuItem :selected="true">
                    <template #icon>
                      <LayoutDashboard class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Active button
                  </SidebarMenuItem>
                  <SidebarMenuItem disabled>
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Disabled button
                  </SidebarMenuItem>
                  <SidebarMenuItem href="#settings" disabled>
                    <template #icon>
                      <Settings class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Disabled link
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Right-side sidebar -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Right-side sidebar</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          side="right" flips the border from the right edge to the left edge. All other behaviour is identical.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[280px] overflow-hidden rounded-large border border-border">
            <div class="flex-1 bg-background"/>
            <Sidebar side="right">
              <SidebarActions/>
              <SidebarSection>
                <SidebarSectionCaption>Context</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="rightSidebarSelection === 'details'" @click="rightSidebarSelection = 'details'">
                    <template #icon>
                      <FileText class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Details
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="rightSidebarSelection === 'members'" @click="rightSidebarSelection = 'members'">
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Members
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="rightSidebarSelection === 'settings'" @click="rightSidebarSelection = 'settings'">
                    <template #icon>
                      <Settings class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Settings
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
            </Sidebar>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Multiple sections -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Multiple sections</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          Stack SidebarSection blocks to group items into distinct labelled categories within a single sidebar.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[480px] overflow-hidden rounded-large border border-border">
            <Sidebar>
              <SidebarBrand/>
              <SidebarSection>
                <SidebarSectionCaption>Main</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="workspaceSelection === 'dashboard'" @click="workspaceSelection = 'dashboard'">
                    <template #icon>
                      <LayoutDashboard class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'inbox'" @click="workspaceSelection = 'inbox'">
                    <template #icon>
                      <Inbox class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Inbox
                    <template #badge>
                      <SidebarMenuBadge>5</SidebarMenuBadge>
                    </template>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarSection>
                <SidebarSectionCaption>Team</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="workspaceSelection === 'members'" @click="workspaceSelection = 'members'">
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Members
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarSection>
                <SidebarSectionCaption>Account</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="workspaceSelection === 'settings'" @click="workspaceSelection = 'settings'">
                    <template #icon>
                      <Settings class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Settings
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarFooter>
                <div class="h-control px-4 flex items-center text-xs text-faint">v1.0.0</div>
              </SidebarFooter>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>

      <!-- Collapsed -->
      <ComponentItemSection>
        <ComponentItemSectionTitle>Collapsed</ComponentItemSectionTitle>
        <ComponentItemSectionDescription>
          collapsed narrows the sidebar to icon-only width. Labels, captions, badges, submenus, actions,
          and the footer are hidden; icons remain centered. Toggle with the button in the header.
        </ComponentItemSectionDescription>
        <ComponentItemSectionExample>
          <div class="flex h-[420px] overflow-hidden rounded-large border border-border">
            <Sidebar :collapsed="collapsed">
              <SidebarHeader>
                <span class="text-sm font-medium text-foreground group-data-[collapsed]/sidebar:hidden">Workspace</span>
                <Button variant="ghost" size="sm" icon :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
                        @click="collapsed = !collapsed">
                  <PanelLeftClose v-if="!collapsed" class="size-icon"/>
                  <PanelLeftOpen v-else class="size-icon"/>
                </Button>
              </SidebarHeader>
              <SidebarSection>
                <SidebarSectionCaption>Main</SidebarSectionCaption>
                <SidebarMenu>
                  <SidebarMenuItem :selected="workspaceSelection === 'dashboard'" @click="workspaceSelection = 'dashboard'">
                    <template #icon>
                      <LayoutDashboard class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Dashboard
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'inbox'" @click="workspaceSelection = 'inbox'">
                    <template #icon>
                      <Inbox class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Inbox
                    <template #badge>
                      <SidebarMenuBadge>12</SidebarMenuBadge>
                    </template>
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'team'" @click="workspaceSelection = 'team'">
                    <template #icon>
                      <Users class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Team
                  </SidebarMenuItem>
                  <SidebarMenuItem v-model:open="projectsOpen">
                    <template #icon>
                      <Folder class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Projects
                    <template #submenu>
                      <SidebarMenuSub>
                        <SidebarMenuItem :selected="workspaceSelection === 'starred'" @click="workspaceSelection = 'starred'">
                          <template #icon>
                            <Star class="size-icon shrink-0" aria-hidden="true"/>
                          </template>
                          Starred
                        </SidebarMenuItem>
                        <SidebarMenuItem :selected="workspaceSelection === 'drafts'" @click="workspaceSelection = 'drafts'">Drafts</SidebarMenuItem>
                      </SidebarMenuSub>
                    </template>
                  </SidebarMenuItem>
                  <SidebarMenuItem :selected="workspaceSelection === 'settings'" @click="workspaceSelection = 'settings'">
                    <template #icon>
                      <Settings class="size-icon shrink-0" aria-hidden="true"/>
                    </template>
                    Settings
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarSection>
              <SidebarFooter>
                <div class="h-control px-4 flex items-center text-xs text-faint">v1.0.0</div>
              </SidebarFooter>
            </Sidebar>
            <div class="flex-1 bg-background"/>
          </div>
        </ComponentItemSectionExample>
      </ComponentItemSection>
  </ComponentContent>
</template>
