---
id: rpm-packaging-process
title: RPM Packaging Process
sidebar_position: 12
description: RPM Packaging Process
---

# RPM Packaging Process

RPM packages are built from the source files plus a spec file, using the _rpmbuild_ program.

**Do Not Build as Root:** Always build RPM packages as a regular, non-root user. Building as a root user is unnecessary and may cause unintended side effects, including damaging your system.

## Resources

- [Fedora Package Maintainers page](http://fedoraproject.org/wiki/PackageMaintainers)
    - [Packaging How-To](http://fedoraproject.org/wiki/PackageMaintainers/CreatingPackageHowTo)
- Fedora Linux chapter 5 (see Seneca Library website \> eBooks \> View All \> Safari \> Fedora Linux).
- rpmlint
    - [Fedora Common Rpmlint issues](http://fedoraproject.org/wiki/Common_Rpmlint_issues)

## Setting up the Packaging Environment

### Needed Packages

Install with _dnf_ (or _yum_ on older versions of Fedora):

- "Fedora Packager" (this is a group of packages - use "dnf groupinstall" or put an @ sign in front of the group name)
- rpmdevtools
- rpmlint
- yum-utils

## Setting up the RPM tree

The directories used by the rpm build tools can be defined as RPM macros. A script is provided in the _rpmdevtools_ package to create a set of personal build directories and create the appropriate entries in the `~/.rpmmacros` file:

```assembly
rpmdev-setuptree
```

The directories created are:

- ~/rpmbuild/SOURCES - for source code (tarballs/zip archives and patches)
- ~/rpmbuild/SPECS - for the spec file
- ~/rpmbuild/SRPMS - for the resulting source RPMs
- ~/rpmbuild/RPMS - for the resulting binary RPMs
- ~/rpmbuild/BUILD - directory used to perform the build
- ~/rpmbuild/BUILDROOT - contains a fake root directory into which the built files are "installed" prior to being packaged

## Wiping out the RPM tree

**Wiping the Tree Deletes Data:** Be sure to save any files you need from your previous build activity before wiping the tree.

When switching to a new package, it is customary to wipe out the _rpmbuild_ tree to avoid clutter: `rpmdev-wipetree`

## Examining Existing SRPMs

A great place to start when learning to build RPMs is to examine some existing SRPMs.

1. Download the source code for an existing RPM: `yumdownloader --source nameofpackage`
2. Install that downloaded SRPM (this does not require root access): `rpm -i nameofpackage*.src.rpm`
    - Source will be in `~/rpmbuild/SOURCES`
    - Spec file will be in `~/rpmbuild/SPECS`

After installing the SRPM you can:

- Examine the specfile: `cd ~/rpmbuild/SPECS; less nameofpackage.spec`
- Prep the sources (unpack tarballs, apply patches) to see the source code as it will be built: `rpmbuild -bp nameofpackage.spec` # Results will be in `~/rpmbuild/BUILD/` (usually in a subdirectory named `nameofpackage-version`).
- Build from source using the specfile:
    1. Build all (binary RPMS plus SRPMS): `rpmbuild -ba nameofpackage.spec`
    2. Build just the spec file: `rpmbuild -bs nameofpackage.spec`
 
## Rebuild from SRPMS

Instead of installing an SRPM and building from the spec file, it is possible to build the binary RPMs and SRPM directly from an SRPM:

```assembly
rpmbuild --rebuild nameofpackage*.src.rpm
```

This is useful when a no binary package is available for a particular platform or distribution version, but an SRPM is available.

## Creating a New Package

### Writing a specfile

1. Run `rpmdev-newspec packagename` in ~/rpmbuild/SPECS
2. Edit the skeleton specfile. Refer to the [Packaging How-To](http://fedoraproject.org/wiki/PackageMaintainers/CreatingPackageHowTo) for guidance.

## Building the RPM

1. `rpmbuild -ba packagename.spec`
    - If successful, output will be binary RPM(s) in `~/rpmbuild/RPMS` and source RPM in `~/rpmbuild/SRPMS`
      - You can install binary RPM as root using this command: `rpm -i rpmfile` or `yum localinstall rpmfile`
    - If unsuccessful, read the error messages carefully.

Note that a successful build of a compiled binary will usually produce both a binary RPM and a _debuginfo_ RPM. The debuginfo package contains additional information which is useful for debugging a problem, but which just takes up space when the program is being used normally.

Some spec files may produce multiple packages -- for example, they may produce separate packages for a game, game data, and documentation; or for a base package and additional plugins for use with that package; or for a base package and multiple user interfaces (such as separate command-line, graphical, and web interfaces). This is done at the discretion of the spec file author where she decides that the user may want to install a subset of the package's features.

**Building to Different Points:** The `-ba` argument means "build all". You can substitute different values to build to different points in the process: `-bp` to build to the prep stage, `-bs` to build only a SRPM, and so forth. See the manpage for <rpmbuild" for details.

## Testing the RPM

The rpmlint tool tests spec files, source RPMs, and binary RPMs to verify that they were created in compliance with the Fedora packaging guidelines.

- Test the spec file: `rpmlint ~/rpmbuild/SPECS/packagename*`
- Test the source RPM: `rpmlint ~/rpmbuild/SRPMS/packagename*.src.rpm`
- Test the binary RPMs: `rpmlint ~/rpmbuild/RPMS/*/packagename*.rpm`

Notice that the checks performed vary based on the input file. For example, some errors in the spec file (such as the summary ending in a period ".") could be determined from the spec file, but only show up when the SRPM/RPM is checked. Each run will report the number of errors and warnings; errors are serious problems which should not be ignored, while warnings may be ignored depending on the context.

If you discover any errors, edit the specfile to correct them. If you need additional information on the error:

- add the -i (information) option to the _rpmlint_ command
- see the [Fedora Common Rpmlint issues](http://fedoraproject.org/wiki/Common_Rpmlint_issues) page on the Fedora wiki

## Common Challenges

Refer to these documents on the Fedora wiki for help on specific packaging challenges:

- [Packaging Guidelines](http://fedoraproject.org/wiki/Packaging:Guidelines) - General packaging guidelines for Fedora, including instructions for specific languages and packaging cases
- [Scriptlet Snippets](http://fedoraproject.org/wiki/Packaging:ScriptletSnippets) - Script(lets) that can be used in RPM packages to solve specific problems

In particular, these sections are useful for GNU software:

- [Packaging .info (texinfo) documentation files](http://fedoraproject.org/wiki/Packaging:ScriptletSnippets#Texinfo)
- [Handling locale files (message translations)](http://fedoraproject.org/wiki/Packaging:Guidelines#Handling_Locale_Files)
